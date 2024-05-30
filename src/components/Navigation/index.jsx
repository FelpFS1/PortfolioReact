import { Link, useLocation } from "react-router-dom";

import { FiAlertCircle } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

import ButtonNavigation from "../ButtonNavigation";

import { StyledNavigation } from "./styles";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <StyledNavigation>
      <Link to={"/"}>
        <ButtonNavigation
          switchBgColor={pathname == "/" ? true : false}
          textContent={"Sobre"}
          icon={<FiAlertCircle />}
        />
      </Link>
      <Link to={"/works"}>
        <ButtonNavigation
          switchBgColor={pathname == "/works" ? true : false}
          pathname={pathname}
          textContent={"Projetos"}
          icon={<MdOutlineWork />}
        />
      </Link>
      <Link to={"/contact"}>
        <ButtonNavigation
          switchBgColor={pathname == "/contact" ? true : false}
          pathname={pathname}
          textContent={"Contato"}
          icon={<MdOutlineEmail />}
        />
      </Link>
    </StyledNavigation>
  );
}
