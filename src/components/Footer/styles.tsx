import styled from "styled-components"


export const Container = styled.header`
    background: var(--purple-light);
    height: 80px;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 0rem;

    text-align: center;

    a{
        color: var(--white);
        opacity: 0.5;
    }

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }

`;

export const Options = styled.div`
    img{
        height: 30px;
    }

    a{
        font-weight: 400;
        font-size: 16px;
        align-items: center;
    }

`