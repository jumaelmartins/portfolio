import Menu from "../menu";
import Hamburguer from "../hamburguer";
import { Container, MenuContainer, TitleContainer, Wrapper } from "./styles";
import { useState } from "react";



const Header = ({select}) => {
    const [menu, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!menu) 
    }
   
    return (
    <Wrapper>
        <Container>
            <TitleContainer>JUMAEL MARTINS</TitleContainer>
            <MenuContainer>
                <Menu variant="desktop" select={select}/>
                <Hamburguer onClick={ToggleMode}/>
            </MenuContainer>
            
        </Container>
        {menu && <Menu active={setMode}/>}
    </Wrapper>)
}

export default Header;