import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(p) => p.theme.blue};
    }
    html {
        font-size: 62.5%;
    }
    body {
         background-color: ${(p) => p.theme["base-background"]};
        color: ${(p) => p.theme["base-text"]}; 
    }
    body, input, textarea, button {
        font: 400 1.6rem Munito, sans-serif;
    } 
`;
