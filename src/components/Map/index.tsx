import { Container, Content } from "./styles";
import map from '../../assets/map.png'


export function Map(){
    return(
        <Container>
            <Content>
                <h1>from Brazil and <b>beyond!</b></h1>
                <img src={map} alt="Map with projects around the globe" />
            </Content>
        </Container>
    )
} 