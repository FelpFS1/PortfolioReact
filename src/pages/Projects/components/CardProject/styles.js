import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import breakpoints from "../../../../styles/breakpoints";

export const CardContainer = styled.div`
  width: 100%;
  height: auto;

  border-radius: 12px;
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 1.4rem 0.8rem;

  -webkit-box-shadow: 6px 6px 6px -6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 6px 6px 6px -6px rgba(0, 0, 0, 0.23);
  box-shadow: 6px 6px 6px -6px rgba(0, 0, 0, 0.23);

  @media ${breakpoints.lg} {
    h4 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media ${breakpoints.sm} {
    height: 275px;
  }
`;

export const CardImage = styled.div`
  width: 90%;
  height: 65%;

  img {
    max-width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

export const CardContent = styled.section`
  background-color: ${(props) => props.theme["gray-200"]};

  p {
    font-weight: 400;
  }
`;

export const CardFooter = styled.footer`
  margin-top: 0.5rem;
  width: 100%;

  button {
    padding: 0.2rem 0.4rem;
    border: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in-out;
      opacity: 0.8;
    }
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;
export const Content = styled(Dialog.Content)`
  min-width: 80%;
  height: 80%;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-200"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    position: fixed;
    border: 0;
    background-color: transparent;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    line-height: 0;

    &:hover {
      color: ${(props) => props.theme.purple};
    }
  }
`;

export const AboutProject = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  margin-top: 2rem;
  gap: 2rem;

  iframe {
    position: relative;
    width: 50%;
    min-height: 50vh;
    border-radius: 12px;
    border: 0;
    @media ${breakpoints.sm} {
      width: 100%;
      min-height: 20vh;
    }
  }

  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;

export const DescriptionProject = styled.div`
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media ${breakpoints.sm} {
    width: 100%;
  }
`;

export const TechnologiesProject = styled.section`
  width: 100%;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  li {
    margin-left: 1rem;
    list-style: none;
    font-weight: 500;
    &::before {
      content: "➜ ";
      color: ${(props) => props.theme.purple};
    }
  }
`;
