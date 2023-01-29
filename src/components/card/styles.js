import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  height: 30rem;
  width: 28rem;

  box-shadow: 0.2rem 0.2rem 0.1rem 0.2rem darkgray;
  cursor: pointer;
  flex-direction: column;
  border-radius: 5px;
  
  transition: all .3s;

  :hover {
    box-shadow: 0 0 0 0;
  }
`;
export const TitleCard = styled.h4`
  display: flex;
  box-sizing: border-box;
  position: relative;

  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: black;

  color: white;
  height: 15%;
  width: 100%;

  ::after {
    content: "";
    height: 1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: black;
  }

 
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 3 0;

  box-sizing: border-box;

  width: 100%;
  height: 100%;
`;
export const Row = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;

  height: 20%;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  height: 30rem;

  display: flex;
  justify-content: center;
  margin: 0.5rem;
  max-width: 100%;
`;
export const CardImg = styled.div`
  margin-top: 2px;
  height: 65%;

  border: 1.5px lightgray solid;
  width: 100%;
  box-sizing: border-box;

  border-radius: 5px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    box-sizing: border-box;
  }
`;
export const CardLink = styled.a`
  display: flex;
  text-decoration: none;
  background-color: cyan;
  max-width: 100%;

  text-transform: uppercase;
  font-weight: bold;
  color: white;
  padding: 0px 5px;

  box-sizing: border-box;
  border-radius: 5px;
  margin: 2px;
  font-size: 0.7rem;

  @media screen and (min-width: 320px) {
    font-size: 0.85rem;
  }

  @media screen and (min-width: 425px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 668px) {
    font-size: 0.95rem;
  }

  &:hover {
    border-bottom: 3px solid #151515;
  }
`;
