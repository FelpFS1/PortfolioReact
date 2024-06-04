import { HeaderImage, HeaderLayoutContainer, LineLayout } from "./styles";

import aboutImage from "../../../assets/About-image.svg";
import projectsImage from "../../../assets/Projects-image.svg";
import contactImage from "../../../assets/Contact-image.svg";
import { useLocation } from "react-router-dom";

const switchImage = {
  "/": aboutImage,
  "/works": projectsImage,
  "/contact": contactImage,
};

export default function HeaderPagesLayout() {
  const { pathname } = useLocation();
  return (
    <HeaderLayoutContainer>
      <HeaderImage $image={switchImage[pathname]} />
      <LineLayout />
    </HeaderLayoutContainer>
  );
}
