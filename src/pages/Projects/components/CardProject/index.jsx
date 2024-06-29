import * as Dialog from "@radix-ui/react-dialog";
import {
  AboutProject,
  CardContainer,
  CardContent,
  CardFooter,
  CardImage,
  DescriptionProject,
} from "./styles";
import { IoClose } from "react-icons/io5";
import { Content, Overlay } from "./styles";

export default function CardProject({ data }) {
  return (
    <CardContainer>
      <CardImage>
        <img src={data.image} alt="" />
      </CardImage>
      <CardContent>
        <h4>{data.title}</h4>
        <p>{data.description.content}</p>
      </CardContent>
      <CardFooter>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Detalhes</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Overlay />
            <Content>
              <Dialog.Close>
                <IoClose size={30} />
              </Dialog.Close>
              <Dialog.Title>{data.title}</Dialog.Title>
              <AboutProject>
                <iframe
                  src={data.videoURL}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
                <DescriptionProject>
                  <Dialog.Description>
                    {data.description.fullContent}
                  </Dialog.Description>
                  <h1>Tecnologias</h1>
                  <h3>Frontend</h3>
                  {data.description.technologies.frontend.map((item) => (
                    <li>{item}</li>
                  ))}
                </DescriptionProject>
              </AboutProject>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </CardFooter>
    </CardContainer>
  );
}
