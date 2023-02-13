import styled from "styled-components"


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 50px;
`;

export const Content = styled.div`
    display: flex;
    gap: 1.5rem;
`;


export const Presentation = styled.div`
    margin-top: 50px;
    background: rgba(163,96,194,0.1);
    padding: 1.5rem;
    border-radius: 3%;

    h3{
        color: var(--purple-light);
    }

    h5, p{
        color: var(--blue-dark);
    }
`;
