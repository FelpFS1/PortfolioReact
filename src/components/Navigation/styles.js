import styled from "styled-components";

export const StyledNavigation = styled.section`
  display: flex;
  position: absolute;
  right: 0;
  gap: 1rem;
  width: auto;
  height: 4.5rem;
  padding: 0.4rem;
  align-items: center;
  border-radius: 19px;
  background-color: ${(props) => props.theme.white};
`;
