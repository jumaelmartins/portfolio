import styled from "styled-components";

export const Dashboard = styled.div`
  max-width: 80%;
  width: 40rem;
  height: 40rem;
  border-radius: 2.2rem;

  justify-self: center;
  background-color: #a1a8b3;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    width: 20rem;
    max-width: 100%;
    border: 3px solid lightgray;

    padding: .7rem;
    border-radius: 2.2rem;
    margin: 0.5rem;
    background-color: white;

    p {
      max-width: 100%;
      text-align: center;
      margin: .2rem;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 560px) {
    width: 30rem;
    height: 30rem;

    div {
      width: 15rem;
      height: 13rem;
    }
  }
`;

export const Row = styled.section`
  display: flex;
  height: 100%;
  margin: 0.5rem;
`;

export const SecondPage = styled.div`
  width: 100%;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  color: black;
  max-width: 120rem;
  margin: 3rem auto;
  align-items: center;
  text-align: center;
  padding-top: 5rem;

  @media screen and (min-width: 768px) {
  }
`;

export const AboutContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 100%;

  ul {
    list-style: none;
  }

  h2 {
    font-size: 2rem;
  }

  div {
    max-width: 80%;
    line-height: 6rem;
    font-size: 1.5rem;
    justify-self: center;
  }

  p {
    text-align: left;
    font-size: 1rem;
    line-height: 3rem;
    
  @media screen and (min-width: 393px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 4rem;
    margin: 0 auto;
    width: auto;
  }

    
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.h1`
  margin: 6rem 0;
  font-size: 2rem;
  color: cyan;
  border: 1px solid cyan;
  width: 80%;

  @media screen and (min-width: 393px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    width: 120rem;
    max-width: 100%;
  }
`;