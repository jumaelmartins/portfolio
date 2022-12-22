import AboutCard from "../aboutCard";
import { Container, AboutContainer, Wrapper, Title, Text, SubTitleContainer, SideContainer} from "./styles";
import WebIcon from '@mui/icons-material/Web';
const About = ({value}) => {
    return (
    <Wrapper>
        <Container>
            <Title>ABOUT ME</Title>
            <AboutContainer>
                <SubTitleContainer>
                    <h3>Olá, Eu Sou </h3> <h2>Jumael Martins,</h2> <h3>Desenvolvedor Front-End</h3>
                </SubTitleContainer>
                <Text>Me chamo Jumael, sou um apaixonado por Tecnologia, criativo e bastante curioso. iniciei meus estudos em TI pela área de Infra, pelo fato de eu ser um entusiasta de Hardware "pelo menos eu me considerava assim rs", Porém ao mergulha na área de Programação tive um vislumbre das infinitas possibilidades que me aguardavam, isso fez com que eu sentisse que poderia realizar qualquer coisa, com isso veio uma imensurável sede de conhecimento. Atualmente estou com meus estudos voltados para área de desenvolvimento de softwares fiz alguns cursos focados em Front-End (Html, Css, Javascript, React) e estou focando nisso (Praticando com projetos em ReactJs), porém já consigo me ver no futuro programando em Back-End também. meus principais passa tempo são (assistir animes, musculação, atividade aeróbica e estudar).<br/>
                    Cursando Bacharelado em Ciência da Computação 01 - Semestre.
                    Graduado em Redes de Computadores. 
                </Text>
            </AboutContainer>
            <SideContainer>
                <br/>
                <br/>
                <h3>O que eu faço?</h3>
                <AboutCard title='Front End' text='Front-End é a parte do lado Client de uma aplicação, utilizando Linguagems e Logica de Programação é Possivel criar uma Interface para que o usuario consiga interagir e vizualizar o Retorno da aplicação. desta forma é possivel Criar "Sites, Aplicações-Web, Aplicações Mobile entre outras." as linguagems utilizadas para criar essa Interface são (Html é o corpo da pagina, Css é o que da Estilo, Cores, Tamanhos e o JavaScript que é a parte Lógica que permite criar as interações sejam essas, adicionar um elemento a pagina, remover um elemento da pagina, enviar uma informação ao sevidor, solitar dados de um sevidor e etc.)' leftIcon={<WebIcon fontSize="inherit"/>}/>
                </SideContainer>
        </Container>
    </Wrapper>)
}

export default About;