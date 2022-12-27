import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  padding-top: 5rem;

  box-sizing: border-box;
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
  font-size: .85rem;
  display: flex;
  margin: 0.3rem;
  font-weight: normal;
  
  line-height: 1.7rem;
  align-self: flex-start;

  @media screen and (min-width: 393px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 668px) {
    line-height: 2rem;
  }

  @media screen and (min-width: 1024px) {
    line-height: 2.5rem;
    font-size: 1.15rem;
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
