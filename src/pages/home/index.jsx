
import About from "../../components/about";
import Home from "../../components/home";
import Projects from "../../components/projects";
import Header from "../../components/header";
import { Container } from "./styles";


const HomePage = () => {
  return (<Container>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
</Container>)
};

export default HomePage;
