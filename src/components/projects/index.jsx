import Card from '../card'
import { Container, ProjectContainer, Wrapper, Title, Column, Row} from "./styles";
import Portifolio from "../../assets/img/portifolio.png"
import EmBreve from "../../assets/img/embreve.png"  
import { ButtonContainer } from '../button/styles';
import Button from '../button';


const Projects = () => {
    return (
   <Wrapper>
        <Container>
            <Title>PROJECTS</Title>
            <ProjectContainer>
                <Column>
                    <Row>
                        <Card title={'PROJETO 1'} img={Portifolio} run={'https://portfolio-two-wheat-83.vercel.app/'} repo={'https://github.com/jumaelmartins/portfolio'}/>
                        <Card title={'PROJETO 2'} img={EmBreve}/>
                        <Card title={'PROJETO 3'} img={EmBreve}/>
                    </Row>
                    <Row>
                        <Card title={'PROJETO 4'} img={EmBreve}/>
                        <Card title={'PROJETO 5'} img={EmBreve}/>
                        <Card title={'PROJETO 6'} img={EmBreve}/>
                    </Row>
                  </Column>
            </ProjectContainer>
            <Button variant="secondary"value={'load more'}></Button>
        </Container>
    </Wrapper>
)
}

export default Projects;