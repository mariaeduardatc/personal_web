import { Container, Content, Project } from "./styles";
import ios from '../../assets/ios.gif'
import pokemon from '../../assets/pokemon.gif'
import zumbi from '../../assets/zumbi.gif'


export function Projects(){
    return(
        <Container>

            <h1>get into it!</h1> 

            <Content>  
                <Project>
                    <img src={ios} alt="ios app gif" />
                    <figcaption>
                        <h3>iOS</h3>
                    </figcaption>
                    <a href="https://github.com/mariaeduardatc/flash_cards" target={"_blank"}></a>
                </Project>   

                <Project>
                    <img src={pokemon} alt="ios app gif" />
                    <figcaption>
                        <h3>Python</h3>
                    </figcaption>
                    <a href="https://github.com/PedroLandim/ProjetoIP" target={"_blank"}></a>
                </Project>

                <Project>
                    <img src={zumbi} alt="ios app gif" />
                    <figcaption>
                        <h3>C#</h3>
                    </figcaption>
                    <a href="https://github.com/mariaeduardatc/Unity" target={"_blank"}></a>
                </Project>
            </Content>
        </Container>
    )
} 