
import About from "../../components/about";
import Home from "../../components/home";
import Projects from "../../components/projects";
import Header from "../../components/header";
import { Container } from "./styles";
import Skills from "../../components/skills";


const HomePage = () => {
  return (<Container>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
</Container>)
};

export default HomePage;
