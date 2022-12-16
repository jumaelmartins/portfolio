
import { Container, AboutContainer, Wrapper, Title, Text, SubTitleContainer, SideContainer, ListContainer, SubListContainer, LeftIcon} from "./styles";
import WebIcon from '@mui/icons-material/Web';
const AboutCard = ({title, leftIcon, text}) => {
    return (

       <SideContainer>
            <ListContainer>
                {leftIcon ? (<LeftIcon>{leftIcon}</LeftIcon>) : null}
                <SubListContainer>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </SubListContainer>
            </ListContainer>
       </SideContainer>
    
)
}

export default AboutCard;