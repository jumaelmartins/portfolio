import { Container, Strip, Wrapper } from "./styles";


const Hamburguer = ({onClick}) => {

    
    return (
        <Wrapper onClick={onClick}>
            <Container>
                <Strip></Strip>
                <Strip></Strip>
                <Strip></Strip>
            </Container>
        </Wrapper>
    )
}

export default Hamburguer;