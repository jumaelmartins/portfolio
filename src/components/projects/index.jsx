import Card from "../card";
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  ProjectContainer,
  Title,
  SideFilter,
  FlexCollum,
  GridCollumn,
  FilterIcon,
} from "./styles";
import Portifolio from "../../assets/img/portifolio.png";
import CalculadoraImc from "../../assets/img/calculadora.imc.png";
import Pokedex from "../../assets/img/pokedex.png";
import Agenda from "../../assets/img/agenda.png";
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
                  <button title="SearchButon">
                    <SearchIcon fontSize="large" />
                  </button>
                  <input placeholder="Buscar" type="search" />
                </div>
              </form>

              <section>
                <h2>Categoria</h2>
                <ul>
                  <li>
                    <input type="checkbox" name="frontend" id="frontend" />
                    <label htmlFor="frontend">Front-End</label>
                  </li>
                  <li>
                    <input type="checkbox" name="backend" id="backend" />
                    <label htmlFor="backend">Back-End</label>
                  </li>
                  <li>
                    <input type="checkbox" name="fullstack" id="fullstack" />
                    <label htmlFor="fullstack">Fullstack</label>
                  </li>
                </ul>

                <h2>Nivel</h2>
                <ul>
                  <li>
                    <input type="checkbox" name="starter" id="starter" />
                    <label htmlFor="starter">Iniciante</label>
                  </li>
                  <li>
                    <input type="checkbox" name="medium" id="medium" />
                    <label htmlFor="medium">Intermediario</label>
                  </li>
                  <li>
                    <input type="checkbox" name="advanced" id="advanced" />
                    <label htmlFor="advanced">Avançado</label>
                  </li>
                </ul>

                <h2>Techs</h2>
                <ul>
                  <li>
                    <input type="checkbox" name="html" id="html" />
                    <label htmlFor="html">HTML</label>
                  </li>
                  <li>
                    <input type="checkbox" name="css" id="css" />
                    <label htmlFor="css">CSS</label>
                  </li>
                  <li>
                    <input type="checkbox" name="javascript" id="javascript" />
                    <label htmlFor="javascript">JAVASCRIPT</label>
                  </li>
                  <li>
                    <input type="checkbox" name="react" id="react" />
                    <label htmlFor="react">REACTJS</label>
                  </li>
                  <li>
                    <input type="checkbox" name="node" id="node" />
                    <label htmlFor="node">NODEJS</label>
                  </li>
                  <li>
                    <input type="checkbox" name="java" id="java" />
                    <label htmlFor="java">JAVA</label>
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
                    alt={"Thumb do projeto Portifolio"}
                    run={"https://portfolio-two-wheat-83.vercel.app/"}
                    repo={"https://github.com/jumaelmartins/portfolio"}
                  />
                  <Card
                    title={"CALCULADORA IMC"}
                    img={CalculadoraImc}
                    alt={"Thumb do projeto Calculadora IMC"}
                    run={"https://jumaelmartins.github.io/Calculadora-IMC/"}
                    repo={
                      "https://github.com/jumaelmartins/Calculadora-IMC.git"
                    }
                  />
                  <Card
                    title={"POKEDEX"}
                    img={Pokedex}
                    alt={"Thumb do projeto Pokedex"}
                    run={"https://jumaelmartins.github.io/Pokedex/"}
                    repo={"https://github.com/jumaelmartins/pokedex.git"}
                  />
                  <Card
                    title={"LAND PAGE"}
                    img={LandinPage}
                    alt={"Thumb do projeto LandingPage"}
                    run={"https://jumaelmartins.github.io/Landing-Page/"}
                    repo={"https://github.com/jumaelmartins/Landing-Page.git"}
                  />
                  <Card
                    title={"AGENDA"}
                    img={Agenda}
                    alt={"Thumb do projeto Agenda"}
                    run={"http://191.234.193.85/"}
                    repo={"https://github.com/jumaelmartins/Agenda.git"}
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
