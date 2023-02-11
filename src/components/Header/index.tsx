import React from "react";
import { Container, Content, Options } from "./styles";


export function Header(){
    return(
        <Container>
            <Content>
                <a type="button" href="">
                    <h1>METC</h1>
                </a>
                
                <Options>
                    <a>home.</a>
                    <a>about.</a>
                    <a>projects.</a>

                    <button type="button">RESUME</button>
                </Options>
                
                <button id="darkmode">Dark Mode</button>
            </Content>
        </Container>
    )
} 