
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
        <a name="skills"/>
        <Container>
            <Title>SKILLS</Title>
            <ProjectContainer>
                <Column>
                    <Row>
                        <img src={Html} alt="LogoHtml"/>
                        <img src={Css} alt="LogoCss"/>
                        <img src={Js} alt="LogoJs"/>
                    </Row>    
                    <Row>
                        <img src={ReactLogo} alt="LogoReact"/>
                        <img src={GitLogo} alt="LogoGit"/>
                        <img src={GitHub} alt="LogoGitHub"/>
                    </Row>
                </Column>
            </ProjectContainer>
        </Container>
        </Wrapper>
)
}

export default Skills;