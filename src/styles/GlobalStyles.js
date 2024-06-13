import { createGlobalStyle } from "styled-components";
import imageBg from "../assets/bg-image.png";
export const GlobalStyles = createGlobalStyle`
#root{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins",sans-serif;
        font-weight: bold;
        text-decoration: none;
    }

    body{
     
        width: 100vw;
        height: 100vh;
        background-image: url(${imageBg});
        background-size:cover;
        background-repeat: no-repeat;
    }

`;
