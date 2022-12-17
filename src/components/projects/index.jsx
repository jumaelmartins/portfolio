import Card from '../card'
import { Container, ProjectContainer, Wrapper, Title, Column, Row} from "./styles";
const Projects = () => {
    return (
   <Wrapper>
        <Container>
            <Title>PROJECTS</Title>
            <ProjectContainer>
                <Column>
                    <Row>
                        <Card title={'PROJETO 1'}/>
                        <Card title={'PROJETO 2'}/>
                        <Card title={'PROJETO 3'}/>
                    </Row>
                    <Row>
                        <Card title={'PROJETO 4'}/>
                        <Card title={'PROJETO 5'}/>
                        <Card title={'PROJETO 6'}/>
                    </Row>
                  </Column>
            </ProjectContainer>
        </Container>
        </Wrapper>
)
}

export default Projects;