import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    color: #1C1C1C;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    box-sizing: border-box;
    text-align: center;
    padding-top: 5rem;

    padding-bottom: 10rem;
    justify-content: center;
 

`

export const ProjectContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    
    flex-wrap: wrap;
    flex: 0 3 0;

    @media screen and (min-width: 668px){
        flex-direction: row;
        justify-content: center;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    justify-content: center;
    align-items: center;

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
    
    flex: 0 3 0;
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
    align-items: center;

    justify-content: center;
    width: 100%;
    flex: 0 3 0;

`
export const Row = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    width: 100%;
    flex: 0 3 0;


   
    height: 100%;
    align-items: center;
    
    @media screen and (min-width: 668px){
        flex-direction: row;
    }
    
`