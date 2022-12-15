import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`

${({variant}) => variant === "mobile" && css`
    background-color: yellowgreen;
    border: 2px solid purple;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: right;
    `}


    ${({variant}) => variant === "desktop" && css`
        background-color: green;
        width: 100%;
        border: 2px solid purple;
        display: flex;
        align-items: center;
        justify-content: center;
    `}


`
export const MenuItems = styled.a`
    ${({variant}) => variant === "mobile" && css`
        text-decoration: none;
        font-size: 1.9rem;
        line-height: 5rem;
        color: white; 
        margin-right: .3rem;

        &:hover {
            transition: 1s;
            background-color: yellow;
            text-align: center;
            width: 100%;
        }

    `}


    ${({variant}) => variant === "desktop" && css`
       display: flex;
       text-decoration: none;
       color: white;
       margin: 0 0 0 2rem;
       padding: .3rem;

       &:hover {
            border-bottom: 3px cyan solid;
            transition: .3s;
       }
    `}


`

export const Wrapper = styled.div`
    border: 2px solid red;
    display: flex;
    width: 100%;
`
