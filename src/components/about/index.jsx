import AboutCard from "../aboutCard";
import { Container, AboutContainer, Wrapper, Title, Text, SubTitleContainer, SideContainer} from "./styles";
import WebIcon from '@mui/icons-material/Web';
const About = () => {
    return (
    <Wrapper>
        <Container>
            <Title> ABOUT ME</Title>
            <AboutContainer>
                <SubTitleContainer>
                    <h3>Helo I'm </h3> <h2>Jumael Martins,</h2> <h3> Front-End Web Developer</h3>
                </SubTitleContainer>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum minus non est vitae voluptatibus excepturi. Voluptatum deleniti facilis, libero totam, consequatur consectetur minus beatae reprehenderit quas recusandae ratione, maiores perspiciatis!</Text>
            </AboutContainer>
            <SideContainer>
                <h3>What I Do?</h3>
                <AboutCard title='Front End' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, autem, eaque delectus optio cumque odit esse consequatur consectetur impedit facere laborum quia adipisci. Voluptates tenetur ipsam soluta minus eum illum!' leftIcon={<WebIcon fontSize="inherit"/>}/>
                <AboutCard title='Front End' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, autem, eaque delectus optio cumque odit esse consequatur consectetur impedit facere laborum quia adipisci. Voluptates tenetur ipsam soluta minus eum illum!' leftIcon={<WebIcon fontSize="inherit"/>}/>
            </SideContainer>
        </Container>
    </Wrapper>)
}

export default About;