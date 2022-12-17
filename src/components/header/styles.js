import styled from "styled-components";

export const Container = styled.div`
    background-color: #161616;
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    box-shadow: 0 0 0 3;
    
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
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    position: fixed;
`
