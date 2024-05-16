import { createGlobalStyle } from "styled-components";
import imageBg from "../assets/bg-image.png";
export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
     
    }

    body{
        overflow-x: hidden;
        width: 100vw;
        height: 100vh;
        background-image: url(${imageBg});
        background-size:cover;
        background-repeat: no-repeat;
      
       
    }
`;
