import Menu from "../menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Title} from "./styles";
import { useState } from "react";


const Header = () => {

  const [toggle, setToggle] = useState(false);
  let menuVariant = toggle ? 'mobile' : 'desktop'

  let handleClick = () => {
    setToggle(!toggle);
  }
  
  return (
    <Container>
      <div>
        <Title>{'< JUMAEL MARTINS />'}</Title>
        <Menu variant={menuVariant} />
      </div>
      <span onClick={handleClick}>
        <MenuIcon color="inherit" fontSize="large" />
      </span>
    </Container>
  );
};

export default Header;
