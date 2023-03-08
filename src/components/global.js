import { createGlobalStyle } from "styled-components";
import "../App.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
  .modalBackground{
    background: linear-gradient(95.17deg, #152D46 -45.48%, #17222F 56.99%);
    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;

export default GlobalStyle;
