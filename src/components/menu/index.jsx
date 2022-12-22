import { Container, MenuItems, Wrapper } from "./styles";


const Menu = ({variant='mobile', active, select}) => {

    return (
        <Wrapper menu={active}>
            <Container variant={variant}>
                <MenuItems href="\" variant={variant} select={select}>Home</MenuItems>
                <MenuItems href="\about" variant={variant} select={select}>About Me</MenuItems>
                <MenuItems href="\projects" variant={variant} select={select}>Projects</MenuItems>
                <MenuItems href="\skills" variant={variant} select={select}>Skills</MenuItems>
                <MenuItems href="\contact" variant={variant} select={select}>Contact Me</MenuItems>
            </Container>
        </Wrapper>
    )
}

export default Menu;