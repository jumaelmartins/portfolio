import { CardImg, CardLink, Column, Row, Container, TitleCard, Wrapper } from "./styles";
import Portifolio from "../../assets/img/portifolio.png"


const Card = ( {variant, title} ) => {
    return (
        <Wrapper>
            <Container>
                <Column>
                    <TitleCard>{title}</TitleCard>
                    <CardImg src={Portifolio}></CardImg>
                </Column>
                <Row>
                    <CardLink href="#"> Run </CardLink>
                    <CardLink href="#"> Repositorio </CardLink>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Card;