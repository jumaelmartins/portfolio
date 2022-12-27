import Menu from "../menu";
import Hamburguer from "../hamburguer";
import { Container, TitleContainer, Wrapper } from "./styles";
import { useState } from "react";

const Header = ({ select }) => {
  const [menu, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!menu);
  };

  return (
    <Wrapper>
      <Container>
        <TitleContainer>JUMAEL MARTINS</TitleContainer>
        <Menu variant="desktop" select={select} />
        <Hamburguer onClick={ToggleMode}/>
      </Container>
      {menu && <Menu active={setMode} />}
    </Wrapper>
  );
};

export default Header;
