import { Outlet } from "react-router-dom";
import Header from "../Header";
import { StyledMain } from "./styles";
import { StyledProfile, StyledAvatar } from "../Profile";

export default function RootLayout() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledProfile>
          <StyledAvatar />
        </StyledProfile>
        <Outlet />
      </StyledMain>
    </>
  );
}
