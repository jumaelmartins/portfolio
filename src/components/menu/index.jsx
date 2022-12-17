import { Container, MenuItems, Wrapper } from "./styles";


const Menu = ({variant='mobile', active}) => {

    return (
        <Wrapper menu={active}>
            <Container variant={variant}>
                <MenuItems href="#" variant={variant}>Home</MenuItems>
                <MenuItems href="#about" variant={variant}>About Me</MenuItems>
                <MenuItems href="#projects" variant={variant}>Projects</MenuItems>
                <MenuItems href="#skills" variant={variant}>Skills</MenuItems>
                <MenuItems href="#contact" variant={variant}>Contact Me</MenuItems>
            </Container>
        </Wrapper>
    )
}

export default Menu;