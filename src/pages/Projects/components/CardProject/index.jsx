import * as Dialog from "@radix-ui/react-dialog";
import {
  AboutProject,
  CardContainer,
  CardContent,
  CardFooter,
  CardImage,
  DescriptionProject,
  TechnologiesProject,
} from "./styles";
import { IoClose } from "react-icons/io5";
import { Content, Overlay } from "./styles";

export default function CardProject({ data }) {
  const isBackend = data.description.technologies.backend;
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
                  title={data.title}
                />
                <DescriptionProject>
                  <Dialog.Description>
                    {data.description.fullContent}
                  </Dialog.Description>
                  <TechnologiesProject>
                    <h1>Tecnologias</h1>
                    <h3>Frontend</h3>
                    <ul>
                      {data.description.technologies.frontend.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {isBackend && (
                      <>
                        <h3>Backend</h3>
                        <ul>
                          {isBackend.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </TechnologiesProject>
                </DescriptionProject>
              </AboutProject>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </CardFooter>
    </CardContainer>
  );
}
