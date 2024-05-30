import SocialItems from "../SocialMedia";
import {
  StyledAvatar,
  StyledInfoItem,
  StyledName,
  StyledProfession,
  StyledProfile,
  StyledInfos,
  StyledIcon,
} from "./styles";

import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineSchool } from "react-icons/md";

const profileInfosItem = [
  {
    icon: <IoLocationOutline />,
    spanText: "Brasília - DF",
  },
  {
    icon: <LiaBirthdayCakeSolid />,
    spanText: "23 anos",
  },
  {
    icon: <MdOutlineSchool />,
    spanText: "Cursando ADS (2024-2026)",
  },
];

export default function Profile() {
  return (
    <StyledProfile>
      <StyledAvatar />
      <StyledName>
        <h2>Felipe Farias</h2>
        <StyledProfession>Web Developer</StyledProfession>
      </StyledName>
      <SocialItems />
      <StyledInfos>
        {profileInfosItem.map((item) => (
          <StyledInfoItem>
            <StyledIcon>{item.icon}</StyledIcon>
            <span>{item.spanText}</span>
          </StyledInfoItem>
        ))}
      </StyledInfos>
    </StyledProfile>
  );
}
