import { Container, Content, Options } from "./styles";
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'


export function Footer(){
    return(
        <Container>
            <Content>
                <Options>
                    <a className="logos" href="https://github.com/mariaeduardatc" target={"_blank"}>
                        <img src={github} alt="GitHub Logo" />
                    </a>
                    <a className="logos" href="https://www.linkedin.com/in/mariacarneirotc/" target={"_blank"}>
                        <img src={linkedin} alt="LinkedIn Logo" />
                    </a>
                </Options>
                <a href="mailto:mariacarneiro@uni.minerva.edu" target={"_blank"}>Created by @mariacarneiro</a>
            </Content>
        </Container>
    )
} 