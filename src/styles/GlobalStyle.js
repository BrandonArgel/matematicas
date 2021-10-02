import { createGlobalStyle } from "styled-components";

import Fonts from "./Fonts";
import variables from "./Variables";

const GlobalStyle = createGlobalStyle`
    ${Fonts};
    ${variables};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
    }

    ::-webkit-scrollbar-thumb {
        background: none;
        background-color: rgba(22, 255, 226, 0.8);
        border: 3px solid var(--fond);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--special-text);
    }

    body {
        background: var(--dark-fond);
        color: var(--light-text);    
        font: normal 1.6rem/100% var(--font-mono);
    }

    #root {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    :focus {
        outline: none;
        border: none;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button
    {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number]
    {
        -moz-appearance: textfield;
    }
`;

export default GlobalStyle;
