import {
  Container,
  AboutContainer,
  Dashboard,
  Row,
  SecondPage,
} from "./styles";


import Skills from "../skills";

const AboutCard = ({ title, leftIcon, text }) => {
  return (
    <SecondPage>
      <Container>
        <AboutContainer>
        <div>
            <h2>lorem </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              iure, laboriosam nam omnis in veritatis quaerat eius ipsam vero
              sint autem excepturi magnam quam? Accusantium possimus saepe
              repellat amet voluptas?
            </p>
            <br />
          </div>
          <Dashboard>
            <Row>
              <div>
                <p>+10</p>
                <p>Projetos</p>
              </div>
              <div>
                <p>+10</p>
                <p>Projetos</p>
              </div>
            </Row>
            <Row>
              <div>
                <p>+10</p>
                <p>Projetos</p>
              </div>
              <div>
                <p>+10</p>
                <p>Projetos</p>
              </div>
            </Row>
          </Dashboard>
        </AboutContainer>
      </Container>
      <Container>
        <Skills></Skills>
      </Container>
    </SecondPage>
  );
};

export default AboutCard;
