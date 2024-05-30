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
  padding: 2rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 20px;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
