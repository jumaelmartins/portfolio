import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  color: #1c1c1c;
  width: 100%;

  padding: 1.5rem;
  max-width: 120rem;
  margin: 3rem auto;

  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 5rem;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  max-width: 100%;
  margin: 3rem auto;
  overflow-x: auto;

  
  ::-webkit-scrollbar {
      width: 1.5rem; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: white; /* color of the tracking area */
      border-radius: 2.2rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: lightgray; /* color of the scroll thumb */
      border-radius: 2.2rem; /* roundness of the scroll thumb */
      border: 0.4rem solid white; /* creates padding around scroll thumb */
    }

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 6rem auto;
  font-size: 2rem;
  color: cyan;
  max-width: 100%;
  width: 80%;

  border: 1px solid cyan;
  @media screen and (min-width: 393px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    width: 120rem;
  }
`;


export const SideFilter = styled.section`
  @media screen and (max-width: 768px) {
    ${({ active }) =>
      active === false &&
      css`
        display: none;
      `}
  }

  color: white;
  background-color: #122b53;
  height: 45rem;
  width: 25rem;
  padding: 1rem 2rem;
  border-radius: 2.2rem;
  /* Input*/
  form {
    max-width: 100%;
    display: flex;
    justify-content: center;

    div {
      max-width: 100%;
      display: flex;
      align-items: center;

      justify-content: space-between;
      background: white;
      height: 3rem;
      margin: 1rem auto;
      border-radius: 2.2rem;

      button {
        align-items: center;
        display: flex;
        max-width: 100%;
        height: 3rem;

        padding: 0.5rem;
        border: none;
        background: none;
        cursor: pointer;
        justify-content: center;
      }

      input {
        position: relative;
        width: 20rem;
        height: 3rem;
        max-width: 100%;
        background: none;
        border: none;
        padding: 0 1rem;
        border-radius: 2.2rem;
        :focus {
          outline: none;
        }
      }
    }
  }

  /* Listas*/

  section {
    text-align: start;
    padding: 0 1rem;
    overflow: auto;
    height: 37rem;
    max-height: 100%;

    ::-webkit-scrollbar {
      width: 1.5rem; /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: white; /* color of the tracking area */
      border-radius: 2.2rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: lightgray; /* color of the scroll thumb */
      border-radius: 2.2rem; /* roundness of the scroll thumb */
      border: 0.4rem solid white; /* creates padding around scroll thumb */
    }

    h2 {
      margin: 1rem auto;
    }

    ul {
      margin: 1rem auto;
      li {
        width: 80%;
        max-width: 100%;
        display: flex;
        list-style: none;
        margin: 1rem auto;

        label {
          margin: 0 1rem;
        }
      }
    }
  }
`;

export const FlexCollum = styled.div`
  display: flex;
  max-width: 100%;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;
export const GridCollumn = styled.div``;

export const FilterIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  position: sticky;
  display: flex;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 2.2rem;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;
`;
