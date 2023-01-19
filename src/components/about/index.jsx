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
              Comecei a estudar programação por volta de Maio/2022 fiz alguns
              cursos focados em Front-End (Html, Css, Javascript, React). Após
              meses de muitas aulas em vídeo, leitura de documentação e prática,
              bugs e mais bugs 😅, Finalmente já estou me sentindo mais
              confiante no JS, então em Jan/2023 iniciei os estudos no Back End.
              Estou estudando Node, Express, Java e MongoDB.  Meus Hobbies são (assistir
              animes, musculação, atividade aeróbica e estudar).
            </p>
          </Text>
        </AboutContainer>
      </Container>
      <AboutCard />
    </MainBG>
  );
};

export default About;
