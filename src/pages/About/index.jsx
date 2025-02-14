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
import SqlIcon from "../../assets/sql-icon.svg"

export default function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <p>
        Estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de software,
        em busca da minha primeira oportunidade na área de Tecnologia da Informação.
        Possuo habilidades em desenvolvimento web, facilidade para aprender novas tecnologias e uma
        comunicação eficaz. Sou proativo, organizado, atento aos detalhes e tenho facilidade para trabalhar
        em equipe. Busco constantemente aprimorar minhas habilidades e adquirir experiência prática para
        contribuir ativamente com o crescimento da equipe e da empresa.
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
              <li>
                <img src={SqlIcon} alt="mongodb-icon" />
              </li>
            </ul>
          </TecnologiesIcons>
        </TechnologiesContent>
      </AboutContent>
    </AboutContainer>
  );
}
