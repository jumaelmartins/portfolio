import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.nav`
  @keyframes menu {
    from {
      transform: translateX(280px);
    }
    to {
      transform: translateX(0);
    }
  }

  ${({ active }) =>
    active !== true &&
    css`
      display: none;
    `}

  ${({ variant }) =>
    variant === "mobile" &&
    css`
      @media screen and (max-width: 768px) {
        background-color: gray;
        opacity: 0.85;

        z-index: 2;
        top: 5.5rem;
        left: 0;
        right: 0;

        padding: 0 3rem;
        margin: 0 auto;

        flex-direction: column;
        height: 100vh;
        position: absolute;
        animation: menu 0.5s ease-out;
        display: flex;
      }

      @media screen and (min-width: 768px;) {
        display: none;
      }
    `}

    ${({ variant }) =>
    variant === "desktop" &&
    css`
      display: none;

      @media screen and (min-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;
export const MenuItems = styled.a`
  z-index: 3;
  ${({ variant }) =>
    variant === "mobile" &&
    css`
      @media screen and (max-width: 768px) {
        text-decoration: none;
        font-size: 0.85rem;
        line-height: 5rem;
        color: cyan;
        margin-right: 0.3rem;

        &:hover {
          transition: 0.2s;
          width: 100%;
          color: white;
        }
      }

      @media screen and (min-width: 768px) {
        display: none;
      }
    `}

  ${({ variant }) =>
    variant === "desktop" &&
    css`
      display: none;

      @media screen and (min-width: 668px) {
        display: flex;
        text-decoration: none;
        color: white;
        margin: 0 0 0 2rem;
        padding: 0.3rem;
        position: relative;

        &:hover {
          color: cyan;
        }
      }

      ${({ select }) =>
        select === "true" &&
        css`
          ::after {
            content: "";
            position: absolute;
            height: 2px;
            background-color: cyan;
            width: 100%;
            bottom: 0;
            left: 0;
            
          }
        }
        `}
    `}
`;
