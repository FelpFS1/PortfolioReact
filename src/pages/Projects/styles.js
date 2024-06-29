import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  gap: 2rem;
`;

export const ProjectsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;

  @media ${breakpoints.xl} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
