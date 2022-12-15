import styled from "styled-components";

export const Container = styled.div`
    background-color: green;
    border: 2px solid rosybrown;
    display: flex;
    width: 32px;
    height: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-right: .45rem;
`

export const Strip = styled.div`
    max-width: 80%;
    background-color: yellow;
    height: .25rem;
    width: 3rem;
    border-radius: .5rem; 
`
export const Wrapper = styled.div`
    background-color: blue;
    border: 2px solid rosybrown;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`