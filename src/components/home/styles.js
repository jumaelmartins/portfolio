import styled from "styled-components";

export const Container = styled.main`
  background-color: white;
  width: 100%;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  box-sizing: border-box;
  flex: 0 2;
 

  @media screen and (min-width: 1025px) {
    padding-top: 5rem;
    display: flex;
    flex-direction: row;

    flex: 1fr 1fr;
    align-items: center;
  }

`;
export const TitleContainer = styled.div`
  width: 256px;
  margin: 3.5rem auto;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 320px) {
    width: 300px;
  }

  @media screen and (min-width: 425px) {
    width: 400px;
  }

  @media screen and (min-width: 668px) {
    width: 720px;
  }

  @media screen and (min-width: 1440px) {
    width: 1024px;
  }

`;
export const Title = styled.h1`
  font-size: 1.7rem;
  display: flex;
  color: cyan;
  margin: 1rem;

  @keyframes titulo {
    0% {
      color: white;
    }
    50% {
      color: lightcyan;
    }
    100% {
      color: cyan;
    }
  }

  @media screen and (min-width: 450px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 842px) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  display: flex;
  margin: 0.1rem;

  line-height: 5px;
  font-weight: normal;
  line-height: 1.5rem;

  @media screen and (min-width: 450px) {
    font-size: 1rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 842px) {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;

  flex: 0 2 1;
  
  width: 256px;
  height: 256px;
  box-sizing: border-box;
  img {
    box-sizing: border-box;
    width: 256px;
    height: 256px;
  }

  @media screen and (min-width: 320px) {
    height: 320px;
    width: 320px;

    img {
      width: 256px;
      height: 256px;
    }
  }

  @media screen and (min-width: 668px) {
    width: 600px;
    img {
      width: 380px;
      height: 380px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
    img {
      width: 512px;
      height: 512px;
    }
  }

`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  @media screen and (min-height: 599px) {
    height: 1024px;
  }
`;
