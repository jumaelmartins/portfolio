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
  flex-shrink: 1;
  @media screen and (min-width: 668px) {
    padding-top: 5rem;
    display: flex;
    flex-direction: row;

    flex: 1fr 1fr;
    align-items: center;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  margin: 3.5rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 668px) {
    height: 25rem;
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
  box-sizing: border-box;

  @media screen and (min-width: 668px) {
    width: 100%;
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
    width: 360px;
    height: 380px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 668px) {
    height: 100vh;
  }
`;
