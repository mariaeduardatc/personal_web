import styled from "styled-components"


export const Container = styled.header`
    max-width: 1120px;
    margin: 50px auto;

    color: var(--blue-dark);

    h1, h2{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
    }

    img{
        border-radius: 50%;
        border: solid 2px;

        margin-bottom: 1rem;
        justify-content: center;
    }
`;

export const Content = styled.div`
    

    padding: 5rem 1rem 5rem;
    display: flex;
    gap: 4rem;

`;

export const Presentation = styled.div`
    text-align: center;
    margin-right: auto;

    
    background: rgba(163,96,194,0.1);
    padding: 2rem;
    border-radius: 50%;

    img{
        width: 98px;
        height: 98px;
        border: var(--purple-light) solid 3.5px;
    }
    
    p{
        width: 470px;
        height: 285px;
        text-align: left;
    }
    
`

export const Information = styled.div`
    display: grid;  
    align-items: center;
    font-size: 16px;

    margin-left: auto;

    .subtitle{
        opacity: 47%;
    }

    img{
        padding: 4px;
        width: 4rem;
        height: 4rem;

        position: absolute;
        right:6.1%;
    }
`

export const Education = styled.div`
    border-bottom: solid 2px;
    height: 20px;
    width: 35rem;

    img{
        bottom: -62.5%;
    }
    
`

export const Passion = styled.div`
    border-bottom: solid 2px;
    height: 20px;
    width: 35rem;
    
    img{
        bottom: -83%;
    }
    
`

export const Hobbies = styled.div`
    border-bottom: solid 2px;
    height: 22.5px;
    width: 35rem;

    img{
        bottom: -104%;
    }
    
`
