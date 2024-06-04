import styled from "styled-components";
export const HeaderLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const HeaderImage = styled.div`
  width: 10rem;
  height: 3rem;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LineLayout = styled.span`
  width: calc(100% - 10.5rem);
  height: 0.3rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.purple};
`;
