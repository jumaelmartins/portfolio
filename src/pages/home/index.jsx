
import About from "../../components/about";
import Home from "../../components/home";
import Header from "../../components/header";
import { Container } from "./styles";
import WebIcon from '@mui/icons-material/Web';

const HomePage = () => {
  return (<Container>
      <Header/>
      <Home/>
      <About title='Front End' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, autem, eaque delectus optio cumque odit esse consequatur consectetur impedit facere laborum quia adipisci. Voluptates tenetur ipsam soluta minus eum illum!' leftIcon={<WebIcon fontSize="inherit"/>}/>
</Container>)
};

export default HomePage;
