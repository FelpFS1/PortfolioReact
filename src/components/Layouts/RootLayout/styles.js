import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  width: 90vw;
  height: 80vh;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  margin-left: 2rem;
  width: 100vw;
  height: 80vh;
`;

export const StyledPages = styled.div`
  width: 100%;
  margin-top: 100px;
  background-color: ${(props) => props.theme.white};
  padding: 2rem;
  border-radius: 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
