import { CardLink, Column, Container, TitleCard, Wrapper } from "./styles";



const Card = ( variant, Title ) => {
    return (
        <Wrapper>
            <Container>
                <Column>
                    <TitleCard>CALCULADORA</TitleCard>
                </Column>
                <CardLink href="#"> Run </CardLink>
                <CardLink href="#"> Repositorio </CardLink>
            </Container>
        </Wrapper>
    )
}

export default Card;