import styled from "styled-components";
import { css } from "styled-components";
export const ButtonContainer = styled.a`
  box-sizing: border-box;
  margin: 0.5rem 0;
  text-align: center;

  background-color: cyan;
  color: white;
  text-decoration: none;

  padding: 1rem;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: bold;

  position: relative;
  width: 166px;
  height: 73px;

  max-width: 100%;

  animation: hop 7s ease-in-out infinite;

  @keyframes hop {
    0% {
      transform: translateY(30px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(30px);
    }
  }

  @media screen and (min-width: 668px) {
    &:hover {
      cursor: pointer;
      animation-play-state: paused;
      opacity: 0.5;

     /* &::after {
        transition: 1s;
        content: "";
        border-radius: 3rem;
        border: solid 1px cyan;
        width: 178px;
        height: 73px;
        position: absolute;
        display: flex;
        left: -7px;
        top: -7.7px;
      }*/
    }
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      animation: none;
      box-shadow: 2px 2px 2px 2px lightgrey;
      height: 65px;
      text-align: center;
      &:hover {
        box-shadow: 0 0 0 0;
        &::after {
          content: "";
          border: none;
        }
      }
    `}
`;
