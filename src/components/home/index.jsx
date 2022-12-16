
import { Container, TitleContainer, Wrapper, Title, Text, ImgContainer, ImgStyle } from "./styles";
import Photo from "../../assets/img/photo.png"



const Home = (variante) => {
    return (
    <Wrapper>
        <Container>
            <TitleContainer>
                <Text>Helo I'm Jumael </Text>
                <Title> Front-End Web Developer</Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum minus non est vitae voluptatibus excepturi. Voluptatum deleniti facilis, libero totam, consequatur consectetur minus beatae reprehenderit quas recusandae ratione, maiores perspiciatis!</Text>
            </TitleContainer>
            <ImgContainer>
                <ImgStyle src={Photo} alt={'Photo'}/>
            </ImgContainer>
        </Container>
    </Wrapper>)
}

export default Home;