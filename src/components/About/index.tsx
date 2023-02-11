import React from "react";
import { Container, Content, Presentation, Information, Education, Passion, Hobbies } from "./styles";
import profile from '../../assets/perfil.jpg'
import university from '../../assets/university.png'
import internet from '../../assets/internet.png'
import sparkle from '../../assets/sparkle.png'




export function About(){
    return(
        <Container>
            <h1>meet me!</h1>
            <Content>

                <Presentation>
                    <img src={profile} alt="profile picture" />
                    <h2 id="title">Hello, world!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                         mollit anim id est laborum.</p>

                </Presentation>

                <Information>
                    <Education>
                        <h3>MINERVA UNIVERSITY</h3>
                        <h3 className="subtitle">EDUCATION</h3>
                        <img src={university} alt="university icon" />
                    </Education>
                    <Passion>
                        <h3>WEB DEVELOPMENT & SOFTWARE ENGINEERING</h3>
                        <h3 className="subtitle">PASSION</h3>
                        <img src={internet} alt="university icon" />
                    </Passion>
                    <Hobbies>
                        <h3>🍳🧘🏻‍♀️🎭🎧📚</h3>
                        <h3 className="subtitle">HOBBIES</h3>
                        <img src={sparkle} alt="university icon" />
                    </Hobbies>
                    
                </Information>
            </Content>
        </Container>
    )
} 