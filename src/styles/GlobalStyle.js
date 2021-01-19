import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    line-height: 26px;
    background:  ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
}


`;
