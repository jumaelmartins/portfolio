import styled from "styled-components";

export const Dashboard = styled.div`
  max-width: 80%;
  width: 40rem;
  height: 40rem;
  border-radius: 2.2rem;
 
  justify-self: center;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 1px 1px gray;

  animation: slide linear 1s;

  div {
    display: flex;
    flex-direction: column;
    width: 20rem;
    max-width: 100%;
    cursor: pointer;
    
    transition: all 1s;

        :hover {
          background-color: darkblue;
          p {
            color: #fff;
          }
        }

    justify-content: center;
    padding: .7rem;
    border-radius: 2.2rem;
    margin: 0.5rem;
    background-color: cyan;

    b {
      color: white;
    }
    

    p {
      max-width: 100%;
      text-align: center;
      margin: .2rem;
      overflow: hidden;
      line-height: normal;
      color: #2e2e2e;
    }
  }

  @media screen and (max-width: 560px) {
    width: 30rem;
    height: 30rem;

    p {
      font-size: 1.35rem;
    }

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

export const SecondPage = styled.section`
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

export const AboutContainer = styled.section`
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
    color: lightgray;
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

export const Title = styled.h2`
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

export const Education = styled.div`
  ul{
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      display: flex;
      justify-content: space-evenly;

      div {
        color: white;
        background-color: cyan;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        border-radius: 100%;
        justify-content: center;
        position: relative;
        cursor: pointer;
        transition: all 1s;

        :hover {
          background-color: darkblue;
        }

        ::after {
          content: "";
          position: absolute;
          background-color: white;
          height: 100%;
          border: 3px dashed lightgray;
          bottom: -125%;
        }
      }

      span {
        margin: 1rem .5rem;
        box-shadow: 1px 1px 1px 1px gray;
        display: flex;
        width: 32rem;
        max-width: 85%;
        flex-direction: column;
      }

      p{
        max-width: 80%;
        margin: 0 1rem;
        font-size: 1.5rem;
      }
    }
  }
`