import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  max-width: 120rem;
  margin: 0 auto;

  align-items: center;
  text-align: center;
  padding-top: 5rem;
`;

export const AboutContainer = styled.div`
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
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
  max-width: 100%;

  @media screen and (min-width: 393px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    width: 120rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  margin: 1.5rem auto;
  font-weight: normal;
  max-width: 100%;

  line-height: 3rem;
  max-width: 100%;
  text-align: left;

  p {
    max-width: 100%;
  }

  padding: 2rem;
  width: 80%;

  @media screen and (min-width: 393px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 4rem;
    margin: 0 auto;
    width: auto;
  }

  b {
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
