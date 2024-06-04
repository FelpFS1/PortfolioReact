import {
  AboutContainer,
  AboutContent,
  TechnologiesContent,
  TecnologiesIcons,
  TecnologiesLogo,
} from "./styles";

import htmlIcon from "../../assets/HtmlIcon.svg";
import NodeIcon from "../../assets/Node-icon.svg";
import JavaScriptIcon from "../../assets/JS-icon.svg";
import CssIcon from "../../assets/CSS-icon.svg";
import TypeScriptIcon from "../../assets/TS-icon.svg";
import ReactIcon from "../../assets/React-icon.svg";
import MongoIcon from "../../assets/Mongo-icon.svg";

export default function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <p>
          Olá! Eu sou Felipe, um desenvolvedor web de 23 anos apaixonado por
          tecnologia. Estou atualmente cursando Análise e Desenvolvimento de
          Sistemas (ADS), onde mergulho de cabeça no mundo da programação e
          desenvolvimento de software.
        </p>
        <p>
          Desde cedo, fui fascinado pela forma como a tecnologia pode
          transformar ideias em realidade e resolver problemas do dia a dia.
          Esse fascínio me conduziu ao desenvolvimento web, onde encontrei minha
          verdadeira vocação.
        </p>
        <TechnologiesContent>
          <TecnologiesLogo />
          <TecnologiesIcons>
            <ul>
              <li>
                <img src={htmlIcon} alt="html-icon" />
              </li>
              <li>
                <img src={CssIcon} alt="css-icon" />
              </li>
              <li>
                <img src={JavaScriptIcon} alt="javascript-icon" />
              </li>
              <li>
                <img src={TypeScriptIcon} alt="typescript-icon" />
              </li>
              <li>
                <img src={ReactIcon} alt="react-icon" />
              </li>
              <li>
                <img src={NodeIcon} alt="nodejs-icon" />
              </li>
              <li>
                <img src={MongoIcon} alt="mongodb-icon" />
              </li>
            </ul>
          </TecnologiesIcons>
        </TechnologiesContent>
      </AboutContent>
    </AboutContainer>
  );
}
