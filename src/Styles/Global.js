import {createGlobalStyle} from 'styled-components';
// import px2vw from "../utils/px2vw";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
  #root {
    width: 100vw;
  }
`;

export default GlobalStyles;