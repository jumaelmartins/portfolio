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
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;

  @media screen and (min-width: 668px) {
    text-align: left;
    margin-top: 32px;
  }
`;
export const Title = styled.h1`
  font-size: 1.7rem;
  display: flex;
  color: cyan;
  margin: 1rem;
  border: 1px solid cyan;
  width: 95%;
  justify-content: center;

  @media screen and (min-width: 393px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 842px) {
    font-size: 3.5rem;
  }
`;

export const Text = styled.p`
  font-size: 0.85rem;
  display: flex;
  margin: 0.3rem;
  font-weight: normal;
  
  box-sizing: border-box;
  line-height: 1.7rem;
  

  @media screen and (min-width: 393px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 668px) {
    line-height: 2rem;
    margin-left: 25px;
    width: 500px;
    
  }

  @media screen and (min-width: 1024px) {
    line-height: 2.5rem;
    font-size: 1.15rem;
    width: 720px;
  }

  @media screen and (min-width: 1440px) {
    width: 1024px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 180px;

  height: 200px;
  border-radius: 50%;
  border: 5px solid cyan;

  flex-shrink: 1;
  box-sizing: border-box;

  @media screen and (min-width: 450px) {
    width: 260px;
    height: 280px;
  }

  @media screen and (min-width: 842px) {
    width: 380px;
    height: 380px;
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