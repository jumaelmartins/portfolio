import AboutCard from "../aboutCard";
import Footer from "../footer";
import {
  Container,
  AboutContainer,
  Title,
  Text,
  ImgStyle,
} from "./styles";
import { MainBG } from "../home/styles";
import WebIcon from "@mui/icons-material/Web";
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
              Hello, im <b>Jumael Martins</b>, Front-End Web Developer
            </p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, amet iste. Vitae eligendi fugiat nisi autem, at dolores
            sit explicabo distinctio, inventore, ullam dolor repellat. In ut
            sint officiis natus!
          </Text>
        </AboutContainer>
      </Container>
      <AboutCard/>
    </MainBG>
  );
};

export default About;
