import { StyledButton } from "./styles";

export default function ButtonNavigation({ textContent, icon, switchBgColor }) {
  return (
    <StyledButton $switchBgColor={switchBgColor}>
      {icon}
      {textContent}
    </StyledButton>
  );
}
