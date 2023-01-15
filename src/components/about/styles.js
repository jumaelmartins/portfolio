import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 3px solid green;

  max-width: 120rem;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  padding-top: 5rem;
`;

export const AboutContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  width:100%;
  align-items: center;
  border: 3px solid yellow;
`;
export const Title = styled.h1`

  margin-top: 6rem;
  font-size: 1.7rem;
  color: cyan;
  border: 1px solid cyan;
  width: 100%;

  @media screen and (min-width: 393px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 842px) {
    font-size: 3.5rem;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  margin: 0 auto;
  font-weight: normal;
  line-height: 3rem;

  b {
    color: cyan;
  }  
`;

export const SubTitleContainer = styled.div`
  @media screen and (min-width: 668px) {
    justify-content: start;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;

  h2,
  h3 {
    align-items: center;
    margin: 3px 5px;
    display: flex;
    white-space: nowrap;
    font-size: 19px;
    font-weight: normal;
  }

  h2 {
    font-size: 23px;
    color: cyan;
    font-weight: bold;
  }
`;
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  list-style: none;
  width: 95%;

  h3 {
    margin-left: 0.3rem;
    text-align: start;
    font-size: 30px;
    color: cyan;
  }
`;

export const ImgStyle = styled.img`
  display: flex;
  align-items: center;
  width: 18rem;

  height: 18rem;
  border-radius: 50%;
  border: 5px solid cyan;

  margin: 0 auto;
  max-width: 100%;
  @media screen and (min-width: 450px) {
    width: 26rem;
    height: 26rem;
  }

  @media screen and (min-width: 842px) {
    width: 32rem;
    height: 32rem;
  }
`;

export const Sobre = styled.article`

  width: 100%;


  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 668px){
    flex-direction: row;
  }
`;











export const Dashboard = styled.div `
margin-top: 8rem;
max-width: 100%;
width: 40rem;
height: 40rem;
background-color: white;
display: flex;
flex-direction: column;

div{
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
  margin: .5rem;
  background-color: gray;
}
`

export const Row = styled.section`
display: flex;
height: 100%;
margin: .5rem;
`

export const SecondPage = styled.div`
  height: 100vh;
  width:100%;
  background-color: white;
`

