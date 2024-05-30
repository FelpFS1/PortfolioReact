import styled from "styled-components";
import avatar from "../../assets/profile.jpg";

export const StyledProfile = styled.aside`
  width: 25vw;
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
`;
export const StyledAvatar = styled.div`
  position: relative;
  width: 50%;
  height: 10rem;
  background: url(${avatar}) no-repeat center;
  background-size: cover;
  border-radius: 1.6rem;
  margin: auto;
  bottom: 6rem;
`;
export const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  text-align: center;
  justify-content: center;
  width: 10rem;
  height: 100px;
  bottom: 6rem;

  & h2 {
    font-weight: 500;
  }
`;

export const StyledProfession = styled.span`
  width: 10rem;
  font-size: 0.7rem;
  text-align: center;
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 0.2rem;
  border-radius: 5px;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 5px;
  padding: 1rem;
  margin: auto;

  & span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: auto;
  border-bottom: 2px solid ${(props) => props.theme["gray-400"]};
  padding: 0.2rem;
`;

export const StyledIcon = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  justify-content: center;
  align-items: center;
`;
