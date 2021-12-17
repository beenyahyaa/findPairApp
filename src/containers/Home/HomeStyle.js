import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 0px 38px 0px;

  h1 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 55px;
    color: #232527;
  }
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const CardsZone = styled.div`
  width: 765px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 88px;
`;
