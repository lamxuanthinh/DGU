import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html,
    body {
        // variables
        /* --text: hsl(0deg 0% 47%);
        --border: #ededed;
        --blue: #50bcfe; */
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
`;
