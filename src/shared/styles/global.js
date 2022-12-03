import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;


    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #e8e8e8;
        display: flex;
        flew-flow: column wrap;
        align-items: center;
        justify-content: center;
        
    }

    h1{
        position: relative;
        left: 40%;
        font-size: 43px;
        margin-bottom: 15px;
        color: #43406a;
        
    }


`;