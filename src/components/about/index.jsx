import AboutCard from "../aboutCard";
import {
  Container,
  AboutContainer,
  Title,
  Text,
  SubTitleContainer,
  SideContainer,
  ImgStyle,
  Sobre,
  Dashboard,
  Row,
} from "./styles";
import { MainBG } from "../home/styles";
import WebIcon from "@mui/icons-material/Web";
import Photo from "../../assets/img/photo.png";
const About = ({ value }) => {
  return (
    <MainBG>
      <Container>
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
      </Container>
    </MainBG>
  );
};

export default About;
