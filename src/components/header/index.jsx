import Menu from "../menu";
import Hamburguer from "../hamburguer";
import { Container, TitleContainer, Wrapper } from "./styles";



const Header = () => {
    return (
        <Wrapper>
        <Container>
            <TitleContainer>JUMAEL MARTINS</TitleContainer>
            <Menu/>
        </Container>
    </Wrapper>)
}

export default Header;