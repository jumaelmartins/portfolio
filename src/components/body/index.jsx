import Card from "../card";
import Menu from "../menu";
import Hamburguer from "../hamburguer";
import { Container, TitleContainer, Wrapper, Title, Text, ImgContainer } from "./styles";
import Photo from "../../assets/img/photo.png"



const Body = (variante) => {
    return (
    <Wrapper>
        <Container>
            <TitleContainer>
                <Text>Helo I'm Jumael </Text>
                <Title> Front-End Web Developer</Title>
                <Text>Breve descritivo bla bla bla bla bla bla bla bla bla bla bla bla bla bla</Text>
                <ImgContainer src={Photo}/>
            </TitleContainer>
        </Container>
    </Wrapper>)
}

export default Body;