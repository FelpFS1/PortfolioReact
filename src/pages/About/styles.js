import styled from "styled-components";
import tecnoImages from "../../assets/Tecno-image.svg";
export const AboutContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  padding: 2rem 10rem;

  p {
    font-size: 1.2rem;
    text-align: justify;
  }
`;
export const TechnologiesContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TecnologiesLogo = styled.div`
  width: 10rem;
  height: 3rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${tecnoImages});
`;

export const TecnologiesIcons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    margin-top: 2rem;
    flex-direction: row;
    gap: 1rem;

    li {
      display: inline-block;
      position: relative;
      list-style: none;
      transition: all;
      align-items: center;
      transition: transform 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
