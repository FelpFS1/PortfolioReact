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
import { FaDownload } from "react-icons/fa6";

const dateNow = new Date()
  const birthDate = new Date("2000/11/21");

 const myAge = dateNow.getFullYear() - birthDate.getFullYear()

const profileInfosItem = [
  {
    icon: <IoLocationOutline />,
    spanText: "Brasília - DF",
  },
  {
    icon: <LiaBirthdayCakeSolid />,
    spanText: myAge - 1,
  },
  {
    icon: <MdOutlineSchool />,
    spanText: "Cursando ADS (2023-2025)",
  },
  {
    icon:<FaDownload/>,
    spanText: '<a href="/FelipeFestagio.pdf" download="Curriculo_Felipe.pdf">Currículo</a>'
  }
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
          <StyledInfoItem key={item.spanText}>
            <StyledIcon>{item.icon}</StyledIcon>
            <span dangerouslySetInnerHTML={{ __html: item.spanText }}></span>
          </StyledInfoItem>
        ))}
      </StyledInfos>
    </StyledProfile>
  );
}
