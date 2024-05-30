import styled from "styled-components";
import Logo from "../../assets/Logo.png";
export const StyledHeader = styled.header`
  display: flex;
  width: 90vw;
  height: 8vh;
  padding: 0.5rem 2rem;
  background-color: transparent;
  text-align: center;
  align-items: center;
  margin-bottom: 6rem;
`;

export const StyledLogo = styled.div`
  width: 10rem;
  height: 3rem;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
