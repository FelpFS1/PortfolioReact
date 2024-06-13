import styled from "styled-components";

import breakpoints from "../../../styles/breakpoints";
export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 80vh;
  margin: auto;

  @media ${breakpoints.md} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  margin-left: 2rem;
  height: 80vh;

  @media ${breakpoints.bg} {
    width: 63vw;
    margin-left: 1rem;
  }
  @media ${breakpoints.md} {
    width: 100%;
    margin: 0;
  }
`;

export const StyledPages = styled.div`
  width: 71vw;
  min-height: 400px;
  position: relative;
  margin-top: 100px;
  background-color: ${(props) => props.theme.white};
  padding: 2rem;
  border-radius: 32px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media ${breakpoints.md} {
    width: 100vw;
  }
`;
