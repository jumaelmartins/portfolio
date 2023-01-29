import { Container, MenuItems } from "./styles";

const Menu = ({ variant = "desktop", active = true}) => {
  return (
    <Container menu={active} variant={variant}>
      <li>
        <MenuItems title="Link to Home" href="\" variant={variant}>
          Home
        </MenuItems>
      </li>
      <li>
        <MenuItems title="Link to about page" href="\about" variant={variant}>
          About Me
        </MenuItems>
      </li>
      <li>
        <MenuItems title="Link to projects page" href="\projects" variant={variant}>
          Projects
        </MenuItems>
      </li>
      <li>
        <MenuItems title="Link to contact page" href="\contact" variant={variant}>
          Contact Me
        </MenuItems>
      </li>
    </Container>
  );
};

export default Menu;
