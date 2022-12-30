import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    flex-direction: column;

    align-items: center;
    justify-content: space-evenly;
    margin-right: .45rem;
    

    :hover {
        animation: spin 1.3s ease-in-out, infinite;
        
    }

    @keyframes spin {
        from{transform: rotate(0deg)}
        to{transform: rotate(360deg)}
    }
@media screen and (min-width: 668px){
    display: none;
}
`

export const Strip = styled.div`
    visibility: visible;
    max-width: 80%;
    background-color: cyan;
    height: .25rem;
    width: 3rem;
    border-radius: .5rem;
    
@media screen and (min-width: 668px){
    visibility: hidden;
} 
`
export const Wrapper = styled.div`
    
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: flex-end;
@media screen and (min-width: 668px){
    visibility: hidden;
   
}
`