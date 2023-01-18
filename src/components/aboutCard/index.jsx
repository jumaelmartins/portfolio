import {
  Container,
  AboutContainer,
  Dashboard,
  Row,
  SecondPage,
  Title,
} from "./styles";

import { MainBG } from "../home/styles";

import Skills from "../skills";

const AboutCard = ({ title, leftIcon, text }) => {
  return (
    <SecondPage>
      <Container>
        <Title>RESUME</Title>
        <AboutContainer>
          <div>
            <h2>EDUCATION</h2>
            <p>
              Estacio - Bacharelado, Ciências da Computação - 10/2022 á 03/2025
            </p>
            <p>
              Estacio - Tecnologo, Redes de Computadores - 01/2019 á 09/2022
            </p>
          </div>
          <Dashboard>
            <Row>
              <div>
                <p>
                  <span>2 </span> Formações
                </p>
              </div>
              <div>
                <p>
                  <span>+1000 </span> Horas de Estudo
                </p>
              </div>
            </Row>
            <Row>
              <div>
                <p>
                  <span>+100 </span> Cursos
                </p>
              </div>
              <div>
                <p>
                  <span>+10 </span> Projetos
                </p>
              </div>
            </Row>
          </Dashboard>
        </AboutContainer>
      </Container>
      <MainBG>
        <Skills/>
      </MainBG>
    </SecondPage>
  );
};

export default AboutCard;
