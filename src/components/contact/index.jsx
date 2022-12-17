
import { Container, ProjectContainer, Wrapper, Title, Column, Row, Git, Linkedin, Email, WhatsUp} from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Contact = () => {
    return (
   <Wrapper>
        <a name="contact"/>
        <Container>
            <Title>CONTACT ME</Title>
            <ProjectContainer>
                <Column>
                    <Git>
                        <GitHubIcon fontSize="inherit" color="inherit"/>
                        <a href="https://github.com/jumaelmartins" target='_blank'>GitHub</a>
                    </Git>
                    <Linkedin>
                        <LinkedInIcon fontSize="inherit" color="inherit"/>
                        <a href="https://www.linkedin.com/in/jumael-martins/" target='_blank'>Linkedin</a>
                    </Linkedin>
                    <Email>
                        <MailIcon fontSize="inherit" color="inherit"/>
                        <a href="mailto:jumaelmartins@gmail.com" target='_blank'>Email</a>
                    </Email>
                    <WhatsUp>
                        <WhatsAppIcon fontSize="inherit" color="inherit"/>
                        <a href="https://wa.me/71996040206" target='_blank'>WhatsUp</a>
                    </WhatsUp>
                </Column>
            </ProjectContainer>
        </Container>
        </Wrapper>
)
}

export default Contact;