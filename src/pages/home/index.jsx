
import About from "../../components/about";
import Home from "../../components/home";
import Projects from "../../components/projects";
import Header from "../../components/header";
import { Container } from "./styles";
import Skills from "../../components/skills";
import Contact from "../../components/contact";


const HomePage = () => {
  return (<Container>
      <Home/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
</Container>)
};

export default HomePage;
