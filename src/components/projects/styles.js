import styled from "styled-components";

export const Container = styled.div`
  color: #1c1c1c;
  width: 100%;

  padding: 1.5rem;
  max-width: 120rem;
  margin: 3rem auto;
  
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 5rem;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem auto;
  flex-wrap: wrap;
 
  @media screen and (min-width: 668px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  margin: 6rem auto;
  font-size: 2rem;
  color: cyan;
  max-width: 100%;
  width: 80%;

  border: 1px solid cyan;
  @media screen and (min-width: 393px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    width: 120rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  width: 100%;
  flex: 0 3 0;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  flex: 0 3 0;

  height: 100%;
  align-items: center;

  @media screen and (min-width: 668px) {
    flex-direction: row;
  }
`;
