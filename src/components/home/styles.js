import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5ff;
    color: #1C1C1C;
    width: 100%;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
@media screen and (min-width: 668px) {
    padding-top: 5rem;
    display: flex;
    flex-direction: row;
    flex: 1fr 1fr;
    height: 70vh;
    align-items: center;
    
}

`
export const TitleContainer = styled.div`
    margin-top: 5rem;
    width: 100%;
   
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 668px){
        height: 25rem;

    }

    a {    
        margin: .5rem;
        background-color: cyan;
        color: white;
        text-decoration: none;
        padding: 1rem;
        border-radius: 3rem;
        font-size: 1.5rem;
        font-weight: bold;
        
        
    }
    @media screen and (min-width: 668px) {
        
    
    a {
        position: relative;

        &:hover{
            
            cursor: pointer;

            &::after {
            transition: 1s;
            content:'';
            border-radius: 3rem;
            border: solid 1px cyan;
            width: 180px;
            height: 73px;
            position: absolute;
            display: flex;
            left: -8.3px;
            top: -8.3px;

        }
        }

        &:visited{
            background-color: darkcyan;
            &::after {
                border: solid 1px darkcyan;
            }
        }
       

    }
}
`
export const Title = styled.h1`
    
    font-size: 1.7rem;
    display:flex;
    color: cyan;
    margin: 1rem;

    @media screen and (min-width: 450px){
        font-size: 2.5rem;
    }

    @media screen and (min-width: 842px){
        font-size: 3.5rem;
    }
`

export const Text = styled.p`
    font-size: 12px;
    display:flex;
    margin: .1rem;
    font-weight: normal;
    line-height: 1.5rem;

    @media screen and (min-width: 450px){
        font-size: 1rem;
    }

    @media screen and (min-width: 842px){
        font-size: 1.3rem;
    }
`
export const ImgContainer = styled.div `
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ImgStyle = styled.img`
    display: flex;
    align-items: center;

    width: 180px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid cyan;

    @media screen and (min-width: 450px){
        width: 260px;
        height: 280px;
    }

    @media screen and (min-width: 842px){
        width: 360px;
        height: 380px;
    }
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;

    @media screen and (min-width: 668px) {
        height: 100vh;
    }
`
