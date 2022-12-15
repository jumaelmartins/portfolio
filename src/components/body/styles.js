import styled from "styled-components";

export const Container = styled.div`
    background-color: #161616;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 2px solid rosybrown;

    img {
        max-width: 100%;
        height: 256px;
        width: 256px;
        background-color: blue;
        border-radius: 50%;

    }
`
export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid rosybrown;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 1.7rem;
    display:flex;
`

export const Text = styled.p`
    font-size: 12px;
    display:flex;
    margin: .1rem;
    font-weight: normal;
`
export const ImgContainer = styled.img`
    display: flex;
    align-items: center;
    height: 1rem;
    width: 1rem;
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
