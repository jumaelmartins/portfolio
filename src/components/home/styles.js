import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;

    align-items: center;
    max-width: 120rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 7rem auto;
    width: 256px;
    height: 256px;

    img {
      width: 256px;
      height: 256px;
    }

    @media screen and (min-width: 320px) {
      height: 320px;
      width: 320px;

      img {
        width: 256px;
        height: 256px;
      }
    }

    @media screen and (min-width: 768px) {
      margin: 0 auto;
      img {
        width: 380px;
        height: 380px;
      }
    }

    @media screen and (min-width: 1440px) {
      img {
        width: 512px;
        height: 512px;
      }
    }
  }
`;

export const Title = styled.section`
  width: 256px;
  margin: 3.5rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 14rem;
    justify-content: space-around;
    display: flex;
    font-size: 3.2rem;
    margin: 2rem auto;
  }

  h2 {
    font-size: 2rem;
    display: flex;
    color: cyan;
    margin: 1rem;

    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 2.5s steps(13), blink 2.5s steps(13) forwards;
    border-right: 5px solid black;

    @media screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  @keyframes typewriter {
    from {
      width: 0%;
    }
    to {
      width: 80%;
    }
  }
  @keyframes blink {
    from {
      border-color: black;
    }
    to {
      border-color: transparent;
    }
  }
`;

export const Text = styled.p`
  display: flex;
  margin: 0.1rem;
  font-size: 1rem;

  line-height: 5px;
  font-weight: normal;
  line-height: 1.5rem;

  @media screen and (min-width: 450px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 842px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

export const MainBG = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  background: linear-gradient(#d8e7eb, #ffffff);
`;

export const GitHub = styled.a`
  text-decoration: none;

  :visited {
    color: inherit;
  }

  :hover {
    transform: scale(1.1);
    color: gray;
    cursor: pointer;
  }
`;

export const Linkedin = styled.a`
  text-decoration: none;

  :visited {
    color: inherit;
  }

  :hover {
    transform: scale(1.1);
    color: royalblue;
    cursor: pointer;
  }
`;

export const WhatsApp = styled.a`
  text-decoration: none;

  :visited {
    color: inherit;
  }
  :hover {
    transform: scale(1.1);
    color: green;
    cursor: pointer;
  }
`;
