import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    background-color: white;
    height: 12rem;
    
    max-width: 100%;
    width: 11rem;    
    border: 1px solid gray;
    
    box-shadow: 2px 2px 3px 1px gray;
    margin: .7rem;
    flex-direction: column;

    border-radius: 5px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 0;
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


    @media screen and (min-height: 1181px){
        height: 18rem;
        width: 20rem;
    }
`
export const TitleCard = styled.h4`
    display: flex;
    box-sizing: border-box;

    align-items: center;
    justify-content: center;
    background-color: #151515;
    
    color: cyan;
    height: 15%;
    width: 100%;
`


export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 3 0;
    
    box-sizing: border-box;

    width:100%;
    height: 100%;
`
export const Row = styled.div`
    display: flex;
    align-self: flex-end;
    align-items: center;
    
    height: 20%;
    flex-wrap: wrap;
    box-sizing: border-box;    
`



export const Wrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    box-sizing: border-box;
    flex: 0 3 0;

    display: flex;
    justify-content: center;
    margin: 3px;    
`
export const CardImg = styled.div`
    margin-top: 2px;
    height: 65%;    

    border: 1.5px lightgray solid;
    width: 100%;
    box-sizing: border-box;
 
    border-radius: 5px;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        box-sizing: border-box;
    }
`
export const CardLink = styled.a`
    display: flex;
    text-decoration: none;
    background-color: cyan;
    max-width: 100%;

    text-transform: uppercase;
    font-weight: bold;
    color: white;
    padding: 0px 5px;

    box-sizing: border-box;
    border-radius: 5px;
    margin: 2px;
    font-size: .7rem;
    
    @media screen and (min-width: 320px) {
        font-size: .85rem;    
    }

    
    @media screen and (min-width: 425px) {
        font-size: .9rem;    
    }

    @media screen and (min-width: 668px) {
        font-size: .95rem;    
    }

    &:hover {
        border-bottom: 3px solid #151515;
    }
`