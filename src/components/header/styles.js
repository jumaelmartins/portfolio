import styled from "styled-components";

export const Container = styled.header`
  background-color: #161616;
  width: 100%;
  height: 5.5rem;
  position: fixed;
  z-index: 3;

  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  box-shadow: 0 0 .1rem .2rem #2a2a2a;


  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    align-items: center;
    
    width: 100%;
    max-width: 120rem;
    height: 100%;

    padding: 0 3rem;
    @media screen and (max-width: 768px) {
        display: flex;
    }
  }

  span {
    display: none;
    align-items: center;
    color: cyan;
    margin-right: 1rem;
    cursor: pointer;


    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

`;

export const Title = styled.h1`
  text-align: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: cyan;
`;
