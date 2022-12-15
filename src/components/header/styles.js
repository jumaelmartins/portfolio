import styled from "styled-components";

export const Container = styled.div`
    background-color: #161616;
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 2px solid rosybrown;
`

export const TitleContainer = styled.div`
    border: 3px solid green;
    text-align: center;
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-size: .85rem;
    font-weight: 700;
    justify-content: center;
    border: 2px solid rosybrown;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
