import { CardImg, CardLink, Column, Row, Container, TitleCard, Wrapper } from "./styles";
import Portifolio from "../../assets/img/portifolio.png"


const Card = ( {img, title, run, repo} ) => {
    return (
        <Wrapper>
            <Container>
                <Column>
                    <TitleCard>{title}</TitleCard>
                    <CardImg src={img}></CardImg>
                </Column>
                <Row>
                    <CardLink href={run} target="_blank"> Run </CardLink>
                    <CardLink href={repo} target="_blank"> Repositorio </CardLink>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Card;