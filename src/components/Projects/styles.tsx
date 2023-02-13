import styled from "styled-components"


export const Container = styled.div` 
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 50px;
    h1{
        margin-bottom: 50px;
    }
`;

export const Content = styled.div`
    justify-content: space-between;
`;

export const Project = styled.figure`

    display: inline-block;
    margin: 10px 20px;
    margin-left: 30px;
    max-width: 315px;
    min-width: 230px;

    height: 275px;


    overflow: hidden;
    position: relative;


    background-color: #000;
    text-align: center;
    font-size: 16px;
    border-radius: 20%;


    box-sizing: border-box;
    transition: all 0.5s ease;

    figcaption {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%) scale(0.7);

        h3 {
            color: var(--blue-dark);
            background-color: #ffff;
            opacity: 0.5;
            border-radius: 50%;
            padding: 50cm;
        }
    }
    

    



    a {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 3;
    }

    :hover > img{
        opacity: 0.7;
    }

    :hover figcaption {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }


`;

