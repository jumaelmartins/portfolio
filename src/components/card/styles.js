import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    background-color: white;
    height: 12rem;
    width: 11rem;    
    border: 1px solid gray;
    
    margin: .7rem;
    flex-direction: column;
    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 392px){
        height: 12rem;
        width: 15rem;
    }

    @media screen and (min-width: 668px){
        height: 8rem;
        width: 12rem;
    }

    @media screen and (min-width: 1024px){
        height: 15rem;
        width: 17rem;
    }
`
export const TitleCard = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #151515;
    color: cyan;
    height: 2rem;
    width: 100%;
`
export const CardLink = styled.a`
    display: flex;
    text-decoration: none;
    background-color: cyan;
    
    color: white;
    padding: 0px 2px;

    border-radius: 3px;
    margin: 2px;
    font-size: 1rem;

    &:hover {
        border-bottom: 3px solid #151515;
    }


`

export const Column = styled.div`
   
    display: flex;
    flex-direction: column;
    
    
    @media screen and (min-width: 668px) {
        height: 70%;
    }

    
    @media screen and (min-width: 1024px) {
        height: 100%;
    }
`
export const Row = styled.div`
   
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;

    align-items: center;
    
    @media screen and (min-width: 668px) {
        height: 30%;
    }

    
`



export const Wrapper = styled.div`
    align-items: center;
    
    display: flex;
    justify-content: center;
    margin: 3px;
    
`
export const CardImg = styled.img`
    margin-top: 2px;
    height: 98%;    
    width: 98%;
    border-radius: 5px;

    @media screen and (min-width: 668px) {
        height: 70%;
    }

    @media screen and (min-width: 1024px) {
        height: 98%;
    }

    align-self: center;

`
