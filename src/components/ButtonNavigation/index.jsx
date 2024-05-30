import { useLocation } from "react-router-dom";
import { StyledButton } from "./styles";
import { useEffect, useState } from "react";

export default function ButtonNavigation({ textContent, icon, switchBgColor }) {
  return (
    <StyledButton switchBgColor={switchBgColor}>
      {icon}
      {textContent}
    </StyledButton>
  );
}
