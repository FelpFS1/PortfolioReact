import { motion } from "framer-motion";

import { IoSend } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";

import {
  AreaContainer,
  ContactContent,
  InputContainer,
  InputsContainer,
  SendMessageButton,
  SendEmail,
} from "./styles";
import { useState } from "react";

export default function Contact() {
  const [contactMessage, setContactMessage] = useState({
    type: "",
    message: "",
    color: "",
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Contate-me",
    honeypot: "",
    replyTo: "@",
    accessKey: "a30ba9f3-350f-47a1-b98a-0e25216b63ab",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });

    const removeMessage = () => {
      setTimeout(() => {
        setContactMessage({ type: "", message: "", color: "" });
      }, 5000);
    };
    const { message } = await res.json();

    if (message == "Email Sent") {
      setContactMessage({
        type: "sucess",
        message: "Mensagem enviada com sucesso!",
        color: "#8C50FE",
      });
      removeMessage();
    } else {
      setContactMessage({
        type: "error",
        message: "Ops... Tente novamente!",
        color: "red",
      });
      removeMessage();
    }
  };
  const { name, email, message } = contact;
  const isDisableButton = !name || !email || !message;
  return (
    <ContactContent>
      {contactMessage.type && (
        <SendEmail
          as={motion.div}
          initial={{ y: 1000 }}
          animate={{ y: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          bgColorContact={contactMessage.color}
        >
          <BiMailSend size={50} />
          <h2>{contactMessage.message}</h2>
        </SendEmail>
      )}
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <InputContainer
            as={motion.div}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              required
              onChange={handleChange}
            />
            <label htmlFor="name">Nome</label>
          </InputContainer>
          <InputContainer
            as={motion.div}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              required
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </InputContainer>
        </InputsContainer>

        <AreaContainer
          as={motion.div}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <textarea
            name="message"
            id="message"
            required
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="message">Mensagem</label>
        </AreaContainer>
        <SendMessageButton
          type="submit"
          as={motion.button}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.7, ease: "easeInOut" }}
          disabled={isDisableButton}
        >
          <IoSend size={24} />
          Enviar
        </SendMessageButton>
      </form>
    </ContactContent>
  );
}
