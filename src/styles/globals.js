import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --bg-write: #FFFFFF;
        --bg-green: #9DCDC0;
        --bg-brown: #D3D2B6;
        --bg-gray: #969CB3;
        --text-brown: #827556;
        --text-body: #3D3B3B;
        --button: #F4EF88;
    }

    @media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: var(--bg-green);
        height: calc(100vh - 52px);
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        color: var(--text-body);
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: var(--text-brown);
    }

    a {
        text-decoration: none;
        color: var(--text-body);
    }

    button {
        cursor: pointer;
    }
    `;

