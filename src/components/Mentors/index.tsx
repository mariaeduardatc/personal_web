import { Container, Content, Presentation } from "./styles";


export function Mentors(){
    return(
        <Container>
            <h1>hear from her mentors</h1>
            <Content>
                <Presentation>
                        <h3>Raquel Ribeiro</h3>
                        <h5>ribeiro@minerva.edu</h5>
                        <h5>Problem Solving with Data Structures and Algorithms Professor at Minerva University</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.</p>
                    </Presentation>
                    <Presentation>
                        <h3>Lucas Tambasco</h3>
                        <h5>ltambasco@minerva.edu</h5>
                        <h5>Ph.D., Assistant Professor of Computational Sciences, Minerva University</h5>
                        <p> "It has been an absolute pleasure having Maria as a student in two of my courses. 
                            Maria is energetic, always willing to participate with insightful comments and valuable questions. 
                            She demonstrates great teamwork skills when working in small groups of 2 to 3 students to solve advanced
                             problems in Calculus and Probability. Since all classes at Minerva have 20 students or less, I can 
                             directly interact with Maria on a daily basis and witness first-hand the contributions she brings 
                             to the team discussions. It would be a joy to have Maria as a student in a future semester, and I 
                             can certainly see her being a great addition to the Calculus Teaching Assistant Team in the future."</p>
                    </Presentation>
            </Content>
        </Container>
    )
} 