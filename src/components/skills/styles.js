import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  color: black;
  max-width: 120rem;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  padding-top: 5rem;

  section {
    margin: 1.5rem 0 0;
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
  
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 40rem;
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
  
  flex-flow: column;
  max-height: 80%;
  max-width: 80%; 
  
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;
  align-items: center;
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
    animation: skill 5s ease-in-out infinite;
  }

  @keyframes skill {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
