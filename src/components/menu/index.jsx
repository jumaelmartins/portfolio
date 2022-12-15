import { Container, MenuItems, Wrapper } from "./styles";


const Menu = ({variant='mobile', active}) => {

    return (
        <Wrapper menu={active}>
            <Container variant={variant}>
                <MenuItems href="#" variant={variant}>Home</MenuItems>
                <MenuItems href="#" variant={variant}>About Me</MenuItems>
                <MenuItems href="#" variant={variant}>Projects</MenuItems>
                <MenuItems href="#" variant={variant}>Skills</MenuItems>
                <MenuItems href="#" variant={variant}>Contact Me</MenuItems>
            </Container>
        </Wrapper>
    )
}

export default Menu;