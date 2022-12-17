
import { Container, ProjectContainer, Wrapper, Title, Column, Row} from "./styles";
import Html from "../../assets/img/html-svgrepo-com (1).svg"
import Css from "../../assets/img/css3-svgrepo-com.svg"
import Js from "../../assets/img/js-svgrepo-com.svg"
import ReactLogo from "../../assets/img/react-svgrepo-com.svg"
import GitLogo from "../../assets/img/git-svgrepo-com.svg"
import GitHub from "../../assets/img/github-svgrepo-com.svg"
const Skills = () => {
    return (
   <Wrapper>
        <Container>
            <Title>SKILLS</Title>
            <ProjectContainer>
                <Column>
                    <Row>
                        <img src={Html}></img>
                        <img src={Css}></img>
                        <img src={Js}></img>
                    </Row>    
                    <Row>
                        <img src={ReactLogo}></img>
                        <img src={GitLogo}></img>
                        <img src={GitHub}></img>
                    </Row>
                </Column>
            </ProjectContainer>
        </Container>
        </Wrapper>
)
}

export default Skills;