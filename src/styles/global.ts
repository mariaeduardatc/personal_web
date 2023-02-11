import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #FFFFFF;
    
        --purple-light: #A360C2;
        --blue-dark: #3C3C60;
    
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Roboto';
    }
    
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%; 
        }
    
    }
    
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    button{
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }
    
    img{
        max-width: 100%;
    }
`