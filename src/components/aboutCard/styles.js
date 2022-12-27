import styled from "styled-components";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-style: normal;
  list-style: none;
  width: 95%;
  flex-wrap: wrap;

  @media screen and (min-width: 668px) {
    width: 100%;
  }

  margin-bottom: 1rem;

  h3 {
    font-size: 30px;
    color: cyan;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const SubListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 1.35rem;

  p {
    font-size: 0.85rem;
    font-weight: normal;
    line-height: 1.7;

    @media screen and (min-width: 393px) {
      font-size: 0.9rem;
    }

    @media screen and (min-width: 668px) {
    line-height: 2rem;
  }

  @media screen and (min-width: 1024px) {
    line-height: 2.5rem;
    font-size: 1.15rem;
  }
  }

  flex-wrap: wrap;
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const LeftIcon = styled.div`
  @media screen and (min-width: 300px) {
    font-size: 128px;
  }
  font-size: 64px;
  display: flex;
  align-items: flex-start;
  height: 100%;

  h3 {
    margin-bottom: 25px;
  }
`;
