import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CardBack = styled.div`
  display: flex;
  padding: 39px 57px 38px 57px;
  background: #1890ff;
  box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);
  border-radius: 4px;
  cursor: pointer;
  span {
    font-family: ;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 68px;
    color: #ffffff;
  }
`;
export const CardFront = styled.div`
  display: flex;
  box-shadow: 0px 4px 30px rgba(8, 55, 72, 0.21);
  border-radius: 4px;
  cursor: pointer;
`;
export const Front = styled.img`
  width: 137px;
  height: 145px;
  border-radius: 4px;
`;
