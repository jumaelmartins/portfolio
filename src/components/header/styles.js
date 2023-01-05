import styled from "styled-components";

export const Container = styled.header`
    background-color: #161616;
    width: 100%;
    height: 3.5rem;
    
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
   // grid-template-columns: 1fr 3fr;
    padding: 0 .5rem;
    box-shadow: 0 3px 3px 3px black;
    @media screen and (min-width: 668px) {
        padding: 0 1rem; 
    }

    @media screen and (min-width: 1024px) {
        padding: 0 5rem; 
    }
    
`

export const TitleContainer = styled.div`
    text-align: center;
    display: flex;
    white-space: nowrap;
    align-items: center;

    font-size: .85rem;
    font-weight: 700;
    justify-content: center;
    color: cyan;
`


export const Wrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    
    position: fixed;
    flex: 0 1;
    box-sizing: border-box;
`
