import AboutCard from "../aboutCard";
import { Container, AboutContainer, Title, Text, ImgStyle } from "./styles";
import { MainBG } from "../home/styles";
import Photo from "../../assets/img/photo.png";

const About = ({ value }) => {
  return (
    <MainBG>
      <Container>
        <Title>ABOUT ME</Title>
        <AboutContainer>
          <ImgStyle src={Photo} alt="" />
          <Text>
            <p>
              Olá, me Chamo <b>Jumael Martins</b>, Desenvolvedor Front-End
            </p>
            <p>
            sou um apaixonado por Tecnologia, criativo e bastante curioso.
            iniciei meus estudos em TI pela área de Infra, pelo fato de eu ser
            um entusiasta de Hardware "pelo menos eu me considerava assim rs",
            Porém ao mergulha na área de Programação tive um vislumbre das
            infinitas possibilidades que me aguardavam, isso fez com que eu
            sentisse que poderia realizar qualquer coisa, com isso veio uma
            imensurável sede de conhecimento. Atualmente estou com meus estudos
            voltados para área de desenvolvimento de softwares fiz alguns cursos
            focados em Front-End (Html, Css, Javascript, React).
            </p>
          </Text>
        </AboutContainer>
      </Container>
      <AboutCard />
    </MainBG>
  );
};

export default About;
