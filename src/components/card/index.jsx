import { CardImg, CardLink, Column, Row, Container, TitleCard, Wrapper } from "./styles";


const Card = ( {img, title, run, repo, alt} ) => {
    return (
        <Wrapper>
            <Container>
                <Column>
                    <TitleCard>{title}</TitleCard>
                    <CardImg>
                        <img alt={alt} src={img}/>
                    </CardImg>
                    <Row>
                        <CardLink href={run} target="_blank"> Run </CardLink>
                        <CardLink href={repo} target="_blank"> Repositorio </CardLink>
                    </Row>
                </Column>
            </Container>
        </Wrapper>
    )
}

export default Card;