import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color:#0F0F0F;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }

`;