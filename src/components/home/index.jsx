
import { Container, TitleContainer, Wrapper, Title, Text, ImgContainer, ImgStyle } from "./styles";
import Button from "../button";
import ImgCoding from "../../assets/img/programing.gif"


const Home = () => {
    return (
    <Wrapper>
        <Container>
            <ImgContainer>
                <img src={ImgCoding} alt={'imgManCodding'}/>
            </ImgContainer>
            <TitleContainer>
                <Text>Olá, Sou Jumael </Text>
                <Title> Densevolvedor Front-End</Title>
                <Text>Bem Vindo(a) ao meu site pessoal! <br/> Criei esse Projeto como forma de estudo. Trata-se de uma LandPage Com uma apresentação visual sobre mim, contendo alguns dos meus projetos e meus contatos (caso você se interesse pelos meus serviços). Utilizei para a criação desta Pagina a Biblioteca ReactJS juntamente com Styled-Components. Clique no Botão Abaixo para ver o Repositorio contendo o Codigo Fonte do Site no meu GitHub.</Text>
                <Button href={'https://github.com/jumaelmartins/portfolio.git'} value={'Repositorio'}></Button>   
            </TitleContainer>   
        </Container>
    </Wrapper>)
}

export default Home;