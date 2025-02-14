import { SocialButton, StyledSocialMedia } from "./styles";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function SocialItems() {
  return (
    <StyledSocialMedia>
      <ul>
        <li>
          <SocialButton>
            <a href="https://github.com/FelpFS1" target="_blank">
              <FaGithub />
            </a>
          </SocialButton>
        </li>
        <li>
          <SocialButton>
            <a href="https://www.linkedin.com/in/felipefariasdev"  target="_blank">
              <FaLinkedinIn color={"blue"} />
            </a>
          </SocialButton>
        </li>
        <li>
          <SocialButton>
            <a href="">
              <FaInstagram color={"#FF0389"} />
            </a>
          </SocialButton>
        </li>
      </ul>
    </StyledSocialMedia>
  );
}
