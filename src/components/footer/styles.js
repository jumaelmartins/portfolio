import styled from "styled-components";

export const Container = styled.footer`
    background-color: #161616;
    width: 100%;
    height: 4rem;
    display: flex;
    

    position: relative;
    justify-content: center;
    align-items: center;

    ::after {
        content:'';
        top: 3px;
        width: 100%;
        background-color: cyan;
        height: 2px;
        position: absolute;
    }

    P {
        color: white;
    }
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`
