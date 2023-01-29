import Card from "../card";
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  ProjectContainer,
  Wrapper,
  Title,
  Column,
  Row,
  SideFilter,
  FlexCollum,
  GridCollumn,
  FilterIcon,
} from "./styles";
import Portifolio from "../../assets/img/portifolio.png";
import EmBreve from "../../assets/img/embreve.png";
import CalculadoraImc from "../../assets/img/calculadora.imc.png";
import Pokedex from "../../assets/img/pokedex.png";
import Button from "../button";
import LandinPage from "../../assets/img/landinPage.png";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";

import { MainBG } from "../home/styles";

const Projects = () => {
  const [toggle, setToggle] = useState(true);

  let handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <MainBG>
      <Container>
        <Title>PROJECTS</Title>
        <FlexCollum>
          <GridCollumn>
            <FilterIcon onClick={handleClick}>
              <FilterAltIcon fontSize="large" />
            </FilterIcon>
            <SideFilter active={toggle}>
              <form action="">
                <div>
                  <button>
                    <SearchIcon fontSize="large" />
                  </button>
                  <input placeholder="Buscar" type="search" />
                </div>
              </form>

              <section>
                <h2>Categoria</h2>
                <ul>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">Front-End</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">Back-End</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">Fullstack</label>
                  </li>
                </ul>

                <h2>Nivel</h2>
                <ul>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">Iniciante</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">Intermediario</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">Avançado</label>
                  </li>
                </ul>

                <h2>Techs</h2>
                <ul>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">HTML</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">CSS</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">JAVASCRIPT</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">REACTJS</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">NODEJS</label>
                  </li>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">JAVA</label>
                  </li>
                </ul>
              </section>
            </SideFilter>
          </GridCollumn>

          <GridCollumn>
            <ProjectContainer>
                  <Card
                    title={"MEU PORTIFOLIO"}
                    img={Portifolio}
                    run={"https://portfolio-two-wheat-83.vercel.app/"}
                    repo={"https://github.com/jumaelmartins/portfolio"}
                  />
                  <Card
                    title={"CALCULADORA IMC"}
                    img={CalculadoraImc}
                    run={"https://jumaelmartins.github.io/Calculadora-IMC/"}
                    repo={
                      "https://github.com/jumaelmartins/Calculadora-IMC.git"
                    }
                  />
                  <Card
                    title={"POKEDEX"}
                    img={Pokedex}
                    run={"https://jumaelmartins.github.io/Pokedex/"}
                    repo={"https://github.com/jumaelmartins/pokedex.git"}
                  />
                  <Card
                    title={"LAND PAGE"}
                    img={LandinPage}
                    alt={"Capa do Projeto de Uma Landing Page"}
                    run={"https://jumaelmartins.github.io/Landing-Page/"}
                    repo={"https://github.com/jumaelmartins/Landing-Page.git"}
                  />
            </ProjectContainer>
          </GridCollumn>
        </FlexCollum>
      </Container>
    </MainBG>
  );
};

export default Projects;

/*
<MainBG>
<Container>
    <Title>PROJECTS</Title>
   
    <Button variant="secondary"value={'load more'}></Button>
</Container>
</MainBG> */
