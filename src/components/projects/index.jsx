import Card from '../card'
import { Container, ProjectContainer, Wrapper, Title, Column, Row} from "./styles";
import Portifolio from "../../assets/img/portifolio.png"
import EmBreve from "../../assets/img/embreve.png"
import CalculadoraImc from "../../assets/img/calculadora.imc.png" 
import Pokedex from "../../assets/img/pokedex.png"  
import Button from '../button';
import LandinPage from '../../assets/img/landinPage.png'

import { MainBG } from '../home/styles';


const Projects = () => {
    return (
   <MainBG>
        <Container>
            <Title>PROJECTS</Title>
            <ProjectContainer>
                <Column>
                    <Row>
                        <Card title={'MEU PORTIFOLIO'} img={Portifolio} run={'https://portfolio-two-wheat-83.vercel.app/'} repo={'https://github.com/jumaelmartins/portfolio'}/>
                        <Card title={'CALCULADORA IMC'} img={CalculadoraImc} run={'https://jumaelmartins.github.io/Calculadora-IMC/'} repo={'https://github.com/jumaelmartins/Calculadora-IMC.git'}/>
                        <Card title={'POKEDEX'} img={Pokedex} run={'https://jumaelmartins.github.io/Pokedex/'} repo={'https://github.com/jumaelmartins/pokedex.git'}/>
                    </Row>
                    <Row>
                        <Card title={'LAND PAGE'} img={LandinPage} alt={'Capa do Projeto de Uma Landing Page'} run={'https://jumaelmartins.github.io/Landing-Page/'} repo={'https://github.com/jumaelmartins/Landing-Page.git'}/>
                        <Card title={'PROJETO 5'} img={EmBreve}/>
                        <Card title={'PROJETO 6'} img={EmBreve}/>
                    </Row>
                  </Column>
            </ProjectContainer>
            <Button variant="secondary"value={'load more'}></Button>
        </Container>
    </MainBG>
)
}

export default Projects;