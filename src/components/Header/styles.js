import styled from "styled-components";
import Logo from "../../assets/Logo.png";
export const StyledHeader = styled.header`
  display: flex;
  width: 90vw;
  height: 8vh;
  padding: 1rem 2rem;
  background-color: transparent;
  text-align: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const StyledLogo = styled.div`
  width: 10rem;
  height: 3rem;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
