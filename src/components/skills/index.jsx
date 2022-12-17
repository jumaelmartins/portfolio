
import { Container, ProjectContainer, Wrapper, Title, Column, Row} from "./styles";
import Html from "../../assets/img/html-svgrepo-com (1).svg"
import Css from "../../assets/img/css3-svgrepo-com.svg"
import Js from "../../assets/img/js-svgrepo-com.svg"
import ReactLogo from "../../assets/img/react-svgrepo-com.svg"
import GitLogo from "../../assets/img/git-svgrepo-com.svg"
import GitHub from "../../assets/img/github-svgrepo-com.svg"
import { useState } from "react";

const Skills = () => {
    return (
   <Wrapper>
        <a name="skills"/>
        <Container>
            <Title>SKILLS</Title>
            <ProjectContainer>
                <Column>
                    <Row>
                        <Column>
                        <img src={Html} alt="LogoHtml"/>
                        </Column>
                        <Column>
                        <img src={Css} alt="LogoCss"/>
                        </Column>
                        <Column>
                        <img src={Js} alt="LogoJs"/>
                        </Column>
                    </Row>    
                    <Row>
                        <Column>
                        <img src={ReactLogo} alt="LogoReact"/>
                        </Column>
                        <Column>
                        <img src={GitLogo} alt="LogoGit"/>
                        </Column>
                        <Column>
                        <img src={GitHub} alt="LogoGitHub"/>
                        </Column>
                    </Row>
                </Column>
            </ProjectContainer>
        </Container>
        </Wrapper>
)
}

export default Skills;