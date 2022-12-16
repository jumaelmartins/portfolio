import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
    

${({variant}) => variant === "mobile" && css`    

    @media screen and (max-width: 668px) {
    background-color: #FFFeFF;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: right;
    }

    @media screen and (min-width: 668px;) {
        display: none;
    }
    `
}



    ${({variant}) => variant === "desktop" && css`
        
        display: none;   

        @media screen and (min-width: 668px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `}
`
export const MenuItems = styled.a`
     
        
    ${({variant}) => variant === "mobile" && css`

        @media screen and (max-width: 668px) {
        text-decoration: none;
        font-size: 1.9rem;
        line-height: 5rem;
        color: cyan; 
        margin-right: .3rem;

        &:hover {
            transition: .2s;
            background-color: cyan;
            text-align: center;
            width: 100%;
            color: white;
        }
    }

    @media screen and (min-width: 668px) {
        display: none;
    }

    `}


    ${({variant}) => variant === "desktop" && css`
       
        display: none;
       
        @media screen and (min-width: 668px){
       display: flex;
       text-decoration: none;
       color: white;
       margin: 0 0 0 2rem;
       padding: .3rem;
        
       &:focus {
            border-bottom: 3px cyan solid;
       }

       &:hover {
            border-bottom: 3px cyan solid;
            transition: .3s;
       }
    }
    `}


`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
`
