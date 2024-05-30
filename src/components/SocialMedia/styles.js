import styled from "styled-components";
export const StyledSocialMedia = styled.div`
  position: relative;
  width: 10rem;
  margin: auto;
  bottom: 5.5rem;

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & li {
      list-style: none;
      & a {
        color: ${(prop) => (prop.color ? prop.color : "black")};
      }
    }
  }
`;
export const SocialButton = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["gray-200"]};
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
