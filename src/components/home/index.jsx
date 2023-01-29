import { Container, Title, MainBG, Text, GitHub, Linkedin, WhatsApp } from "./styles";
import ImgCoding from "../../assets/img/Coding _Two Color.svg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = () => {
  return (
    <MainBG>
      <Container>
        <span>
          <img src={ImgCoding} alt={"imgManCodding"} />
        </span>
        <Title>
          <Text>Olá, Sou Jumael </Text>
          <h2> Densevolvedor Front-End</h2>
          <Text>Bem Vindo(a) ao meu site pessoal!</Text>
          <div>
            <GitHub title="Link to github" href="https://github.com/jumaelmartins" target={'_blank'}>
              <GitHubIcon color="inherit" fontSize="inherit" />
            </GitHub>
            <Linkedin title="Link to linkedin" href="https://www.linkedin.com/in/jumael-martins/" target={'_blank'}>
              <LinkedInIcon color="inherit" fontSize="inherit" />
            </Linkedin>
            <WhatsApp title="Link to whatsapp" href="https://wa.me/71996040206" target={'_blank'}>
              <WhatsAppIcon color="inherit" fontSize="inherit" />
            </WhatsApp>
          </div>
        </Title>
      </Container>
    </MainBG>
  );
};

export default Home;
