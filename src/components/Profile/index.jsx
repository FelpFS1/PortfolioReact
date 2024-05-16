import styled from "styled-components";
import avatar from "../../assets/profile.jpg";

export const StyledProfile = styled.aside`
  width: 20vw;
  height: 100%;
  background-color: #ffff;
  border-radius: 20px;
`;
export const StyledAvatar = styled.div`
  position: relative;
  width: 9vw;
  height: 12rem;
  background: url(${avatar}) no-repeat center;
  background-size: cover;
  border-radius: 2rem;
  margin: auto;
  bottom: 7rem;
`;
