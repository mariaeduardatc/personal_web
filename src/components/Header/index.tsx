import { Container, Content, Options } from "./styles";


export function Header(){

    const activateDarkMode = () => {
        window.localStorage.setItem('dark_mode', 'true')
        const allElements: Element [] = Array.from(document.getElementsByTagName('*'))
        for (const element of allElements) {
            element.classList.add('dark')
        }
    }

    const deactivateDarkMode = () => {
        window.localStorage.removeItem('dark_mode')
        const allElements: Element [] = Array.from(document.getElementsByTagName('*'))
        for (const element of allElements) {
            element.classList.remove('dark') // Vc precisa criar essa classe no seu CSS
        }
    }

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

                    <button type="button" >RESUME</button>
                </Options>
                
                <button id="darkmode" 
                onClick = {() => 
                {
                    if (window.localStorage.getItem('dark_mode')) {deactivateDarkMode()} 
                    else {activateDarkMode()}
                }}>Dark Mode</button>
            </Content>
        </Container>
    )
} 