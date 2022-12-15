import { Container, MenuItems, Wrapper } from "./styles";



const Menu = ( variant, Title ) => {
    return (
        <Wrapper>
            <Container variant="desktop">
                <MenuItems href="#" variant="desktop">Home</MenuItems>
                <MenuItems href="#" variant="desktop">About Me</MenuItems>
                <MenuItems href="#" variant="desktop">Projects</MenuItems>
                <MenuItems href="#" variant="desktop">Skills</MenuItems>
                <MenuItems href="#" variant="desktop">Contact Me</MenuItems>
            </Container>
        </Wrapper>
    )
}

export default Menu;