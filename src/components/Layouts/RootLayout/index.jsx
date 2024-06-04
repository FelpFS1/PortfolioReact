import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Header";
import { StyledMain, StyledPages, StyledSection } from "./styles";
import Navigation from "../../Navigation/index";
import Profile from "../../Profile";
import { AnimatePresence } from "framer-motion";
import AnimatePage from "../../AnimatePage";

export default function RootLayout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Profile />
        <StyledSection>
          <Navigation />
          <StyledPages>
            <AnimatePresence mode="wait">
              <AnimatePage>
                <Outlet />
              </AnimatePage>
            </AnimatePresence>
          </StyledPages>
        </StyledSection>
      </StyledMain>
    </>
  );
}
