import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5ff;
    color: #1C1C1C;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 5rem;

    padding-bottom: 10rem;
    
   


    
    @media screen and (min-height: 916px){
        height: 100vh;
    }

`

export const ProjectContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 668px){
        flex-direction: row;
        flex-wrap: wrap;
        
        justify-content: center;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 668px) {
        flex-direction: row;
    }
`

export const Title = styled.h1`
    font-size: 1.7rem;
    display:flex;
    color: cyan;
    margin: 1rem;
    border: 1PX solid cyan;
    width: 95%;
    justify-content: center;

    @media screen and (min-width: 393px){
        font-size: 3rem;
    }

    @media screen and (min-width: 842px){
        font-size: 3.5rem;
    
    }
`

export const Column = styled.div`
  
    display: flex;
    flex-direction: column;

`
export const Row = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    
    @media screen and (min-width: 668px){
        flex-direction: row;
    }
    
`