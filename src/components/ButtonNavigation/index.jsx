import { useLocation } from "react-router-dom";
import { StyledButton } from "./styles";

export default function ButtonNavigation({ textContent, icon, switchBgColor }) {
  return (
    <StyledButton $switchBgColor={switchBgColor}>
      {icon}
      {textContent}
    </StyledButton>
  );
}
