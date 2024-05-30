import { Outlet } from "react-router-dom";
import Header from "../Header";
import { StyledMain, StyledPages, StyledSection } from "./styles";
import Navigation from "../Navigation/index";
import Profile from "../Profile";

export default function RootLayout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Profile />
        <StyledSection>
          <Navigation />
          <StyledPages>
            <Outlet />
          </StyledPages>
        </StyledSection>
      </StyledMain>
    </>
  );
}
