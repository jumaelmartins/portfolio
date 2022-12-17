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
    display: flex;
    align-items: center;
    text-align: center;
    
    
    justify-content: center;

   
    img {
        margin: 5rem;
        width: 128px;
        height: 128px;  
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

    height: 100%;
    align-items: center;
    
    @media screen and (min-width: 668px){
        
    }
    
`

export const Git = styled.div`
    
    margin: 16px;
    font-size: 64px;
    display: flex;

    height: 100%;
    align-items: center;
    color: darkgray;

    &:hover {
        cursor: pointer;
    }
    

    a {
        
        padding: 16px;
        margin: 16px;
        color: #161616;
        font-size: 20px;
        font-weight: bold; 
        text-decoration: none;

        &:visited {
        color: #161616;
        }

        &:hover {
            border: solid 1px cyan;
            border-radius: 5px;

        }
    }
    @media screen and (min-width: 668px){
        
    }
`
export const Linkedin = styled.div`
  
    margin: 16px;
    font-size: 64px;
    display: flex;

    height: 100%;
    align-items: center;
    color: royalblue;

    &:hover {
        cursor: pointer;
    }
    

    a {
        padding: 16px;
        margin: 16px;
        color: #161616;
        font-size: 20px;
        font-weight: bold; 
        text-decoration: none;
        &:hover {
            border: solid 1px cyan;
            border-radius: 5px;

        }
        &:visited {
        color: #161616;
        }
    }
    @media screen and (min-width: 668px){
        
    }
`

export const Email = styled.div`
    

    margin: 16px;
    font-size: 64px;
    display: flex;

    height: 100%;
    align-items: center;
    color: orangered;

    &:hover {
        cursor: pointer;
    }
    
    a {
        padding: 16px;
        margin: 16px;
        color: #161616;
        font-size: 20px;
        font-weight: bold; 
        text-decoration: none;
        &:hover {
            border: solid 1px cyan;
            border-radius: 5px;

        }
        &:visited {
        color: #161616;
        }
    }
    @media screen and (min-width: 668px){
        
    }
`

export const WhatsUp = styled.div`
  
    margin: 16px;
    font-size: 64px;
    display: flex;

    height: 100%;
    align-items: center;
    color: yellowgreen;

    &:hover {
        cursor: pointer;
    }

    a {
        white-space: nowrap;
        padding: 16px;
        margin: 16px;
        color: #161616;
        font-size: 20px;
        font-weight: bold; 
        text-decoration: none;
        &:hover {
            border: solid 1px cyan;
            border-radius: 5px;

        }
        &:visited {
        color: #161616;
        }
    }
    @media screen and (min-width: 668px){
        
    }
`