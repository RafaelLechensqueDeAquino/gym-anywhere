import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        text-decoration: none;

    }
    body {
        background: #CED2DA;
        -webkit-font-smoothing: antialiased;
        font-family: 'headline-gothic-atf';
        color: #000000;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;
