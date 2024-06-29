import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const ContactContent = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  form {
    width: 100%;
  }

  input {
    width: 100%;
    font-weight: lighter;
    background-color: ${(props) => props.theme["gray-200"]};
    border: none;
    border-radius: 8px;
    outline: none;
    min-width: 250px;
    padding: 1rem;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 0.8125rem;
      top: -0.3rem;
      color: ${(props) => props.theme.purple};
      opacity: 1;
    }
  }

  @media ${breakpoints.lg} {
    padding: 0;
  }
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media ${breakpoints.lg} {
    flex-direction: column;
    gap: 0;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-top: 0.8125rem;
  flex-direction: column;
  label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 0.45rem);
    left: 0.5rem;
    transition: all 0.1s linear;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.1s linear;
    opacity: 0.5;
  }
`;
export const AreaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  textarea {
    width: 100%;
    height: 8rem;
    font-weight: lighter;
    background-color: ${(props) => props.theme["gray-200"]};
    border: none;
    border-radius: 8px;
    outline: none;
    min-width: 250px;
    padding: 1rem;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    resize: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 0.8125rem;
      top: -1.2rem;
      color: ${(props) => props.theme.purple};
      opacity: 1;
    }
  }
  label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 3.5rem);
    left: 0.5rem;
    transition: all 0.1s linear;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.1s linear;
    opacity: 0.5;
    box-sizing: border-box;
  }
`;

export const SendMessageButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: 0;
  margin-top: 1.2rem;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;

  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const SendEmail = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  position: absolute;

  background-color: ${(props) => props.bgColorContact};
  color: ${(props) => props.theme.white};
  opacity: 0.9;
  z-index: 1000;
`;
