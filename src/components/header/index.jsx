import Menu from "../menu";
import Hamburguer from "../hamburguer";
import { Container, MenuContainer, TitleContainer, Wrapper } from "./styles";
import { useState } from "react";



const Header = () => {
    const [menu, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!menu) 
    }
   
    return (
    <Wrapper>
        <Container>
            <TitleContainer>JUMAEL MARTINS</TitleContainer>
            <MenuContainer>
                <Menu variant="desktop"/>
                <Hamburguer onClick={ToggleMode}/>
            </MenuContainer>
            
        </Container>
        {menu && <Menu active={setMode}/>}
    </Wrapper>)
}

export default Header;