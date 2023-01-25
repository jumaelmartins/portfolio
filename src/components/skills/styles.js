import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  color: black;
  max-width: 120rem;
  margin: 3rem auto;
  align-items: center;
  text-align: center;
  padding-top: 5rem;

  section {
    margin: 1.5rem 0 0;
    display: flex;
    flex-flow: column;
    width: 100%;

    color: white;
    align-items: center;
    justify-items: center;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 40rem;
      align-items: flex-start;
    }
  }
`;
export const Svglogo = styled.svg`
  width: 48px;
  height: 48px;
  fill: white;
  cursor: pointer;
  max-width: 100%;

  margin: 1rem;
  ${({ variant }) =>
    variant === "html" &&
    css`
      &:hover {
        fill: red;
      }
    `}

  ${({ variant }) =>
    variant === "css" &&
    css`
      &:hover {
        fill: blue;
      }
    `}

    ${({ variant }) =>
    variant === "js" &&
    css`
      &:hover {
        fill: yellow;
      }
    `}

    ${({ variant }) =>
    variant === "react" &&
    css`
      transition: 1.5s;
      &:hover {
        fill: lightblue;
        animation: spin 4.5s 0.1s linear infinite;
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      }
    `}

    ${({ variant }) =>
    variant === "git" &&
    css`
      &:hover {
        fill: red;
      }
    `}

    ${({ variant }) =>
    variant === "github" &&
    css`
      &:hover {
        fill: darkgray;
      }
    `}
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

export const Column = styled.div`
  align-items: center;
  display: flex;
  
  justify-content: center;
  flex-flow: column;
  max-width: 100%;

  h2 {
    font-size: 2rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 50rem;
    max-width: 100%;
    flex-wrap: wrap;
  }

`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  align-items: center;
  max-width: 100%;
`;

export const Progress = styled.div`
  width: 10rem;
  height: 1rem;
  background-color: lightgray;
  border-radius: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 1rem;
    border-radius: 5px;
    background-color: cyan;
  }
`;
