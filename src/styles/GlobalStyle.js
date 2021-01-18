import { createGlobalStyle } from "styled-components";
import { themes } from "./ColorStyles";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    line-height: 26px;
    background: ${themes.light.backgroundColor};
    
    @media (prefers-color-scheme: dark) {
        background: ${themes.dark.backgroundColor};
        color: ${themes.dark.text1};
    }
}

`;
