import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 10rem;
    width: 10rem;
    background-color: royalblue;
    
    margin: .3rem;
    flex-direction: column;
    &:hover {
        filter: brightness(1.5);
        transition: .3s;
        cursor: pointer;
    }
`
export const TitleCard = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    height: 2rem;
    width: 100%;
`
export const CardLink = styled.a`
    display: flex;
    text-decoration: none;
    background-color: violet;
    margin-bottom: .5rem;
    align-self: flex-end;

    &:hover {
        border-bottom: 3px solid cyan;
    }

`

export const Column = styled.a`
    height: 100%;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
`




export const Wrapper = styled.div`
    border: 2px solid red;
    display: flex;
    width: 100%;
    justify-content: center;
`
