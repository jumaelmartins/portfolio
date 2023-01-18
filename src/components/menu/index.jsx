import { Container, MenuItems } from "./styles";

const Menu = ({ variant = "desktop", active = true}) => {
  return (
    <Container menu={active} variant={variant}>
      <MenuItems href="\" variant={variant}>
        Home
      </MenuItems>
      <MenuItems href="\about" variant={variant}>
        About Me
      </MenuItems>
      <MenuItems href="\projects" variant={variant}>
        Projects
      </MenuItems>
      <MenuItems href="\contact" variant={variant}>
        Contact Me
      </MenuItems>
    </Container>
  );
};

export default Menu;
