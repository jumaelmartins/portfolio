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
  align-items: center;
  text-align: center;

  justify-content: center;

  img {
    margin: 5rem;
    width: 128px;
    height: 128px;
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
`;
export const Row = styled.div`
  display: flex;

  height: 100%;
  align-items: center;

  @media screen and (min-width: 668px) {
  }
`;

export const Git = styled.div`
  margin: 16px;
  font-size: 64px;
  display: flex;

  height: 100%;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }

  a {
    padding: 16px;
    margin: 16px;
    color: #161616;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;

    &:visited {
      color: #161616;
      color: white;
    }

    &:hover {
      background-color: cyan;
      border-radius: 5px;
      color: white;
    }
  }
  @media screen and (min-width: 668px) {
  }
`;
export const Linkedin = styled.div`
  margin: 16px;
  font-size: 64px;
  display: flex;

  height: 100%;
  align-items: center;
  color: royalblue;
  color: white;

  &:hover {
    cursor: pointer;
  }

  a {
    padding: 16px;
    margin: 16px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: cyan;
      border-radius: 5px;
      color: white;
    }
    &:visited {
      color: white;
    }
  }
  @media screen and (min-width: 668px) {
  }
`;

export const Email = styled.div`
  margin: 16px;
  font-size: 64px;
  display: flex;

  height: 100%;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }

  a {
    padding: 16px;
    margin: 16px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: cyan;
      border-radius: 5px;
      color: white;
    }
    &:visited {
      color: white;
    }
  }
  @media screen and (min-width: 668px) {
  }
`;

export const WhatsUp = styled.div`
  margin: 16px;
  font-size: 64px;
  display: flex;

  height: 100%;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }

  a {
    white-space: nowrap;
    padding: 16px;
    margin: 16px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: cyan;
      border-radius: 5px;
      color: white;
    }
    &:visited {
      color: white;
    }
  }
  @media screen and (min-width: 668px) {
  }
`;
