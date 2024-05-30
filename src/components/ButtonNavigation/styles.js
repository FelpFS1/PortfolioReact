import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0.4rem;
  font-size: 0.8rem;
  border-radius: 1.1rem;
  font-weight: bold;
  text-align: center;
  border: none;
  transition: background-color, color ease-in-out 0.3s;
  color: ${(props) => (props.switchBgColor ? props.theme.white : "")};
  background-color: ${(props) =>
    props.switchBgColor ? props.theme.purple : props.theme["gray-200"]};
  cursor: pointer;
  & svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${(props) => (props.switchBgColor ? "" : props.theme.purple)};
  }
`;
