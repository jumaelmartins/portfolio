import {
  Container,
  AboutContainer,
  Dashboard,
  Row,
  SecondPage,
  Title,
  p,
} from "./styles";

import { MainBG } from "../home/styles";

import Skills from "../skills";

const AboutCard = ({ title, leftIcon, p }) => {
  return (
    <SecondPage>
      <Container>
        <Title>RESUME</Title>
        <AboutContainer>
          <div>
            <section>
              <h2>PROFILE</h2>
              <p>
                Eu sou bastante comprometido, principalmente com meus objetivos,
                Desde que me interessei na área da programação, estudo
                diariamente para conseguir a minha primeira oportunidade.
                Comecei os estudos em mai/2022 desde então venho desenvolvendo
                diversos projetos para colocar em prática todo o meu
                conhecimento. Tenho facilidade de aprendizado, boa comunicação e
                a todo momento busco me aprimorar cada vez mais. Perfil
                analitico focado em solução de problemas, bastante Hands On.
              </p>
            </section>
            <section>
              <h2>EDUCATION</h2>
              <p>
                Estacio - Bacharelado, Ciências da Computação - 10/2022 á
                03/2025
              </p>
              <p>
                Estacio - Tecnologo, Redes de Computadores - 01/2019 á 09/2022
              </p>
            </section>
          </div>
          <Dashboard>
            <Row>
              <div>
                <p>
                  <b>2</b>
                </p>
                <p>Formações Academicas.</p>
              </div>
              <div>
                <p>
                  <b>+1000</b>
                </p>
                <p>Horas de Estudo.</p>
              </div>
            </Row>
            <Row>
              <div>
                <p>
                  <b>+100</b>
                </p>
                <p>Cursos Relacionados a Programação.</p>
              </div>
              <div>
                <p>
                  <b>+10</b>
                </p>
                <p>Projetos Hospedados no GitHub.</p>
              </div>
            </Row>
          </Dashboard>
        </AboutContainer>
      </Container>
      <MainBG>
        <Skills />
      </MainBG>
    </SecondPage>
  );
};

export default AboutCard;
