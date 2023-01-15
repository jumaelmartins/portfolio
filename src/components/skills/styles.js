import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.div`

`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  justify-content: center;

  @keyframes up {
    0% {
      transform: translateY(0px);
    }
    33% {
      transform: translateY(10px);
    }
    66% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  img {
    margin: 5rem;
    width: 128px;
    height: 128px;

    &:hover {
      cursor: pointer;
      animation: up 3s ease-in-out infinite;
    }
  }
`;

export const Svglogo = styled.svg`
  width: 64px;
  height: 64px;
  fill: black;

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
        animation: spin 4.5s .1s linear infinite;
        @keyframes spin {
            to{transform:rotate(360deg)}
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (min-width: 668px) {
    flex-direction: row;
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

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

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
