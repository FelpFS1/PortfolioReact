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
  padding: 2rem 5rem;

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
      display: flex;
      flex-direction: column;
      list-style: none;

      align-items: center;
      transition: transform 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
      &:nth-child(5) {
        animation: rotate 5s linear infinite;

        &:hover {
          animation: none;
        }
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
`;
