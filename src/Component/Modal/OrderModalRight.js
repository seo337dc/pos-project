import React from "react";
import styled from "styled-components";
import { flexCenter, flexSpaceBetween } from "../../Styles/Theme";

const OrderModalRight = ({ menuList }) => {
  console.log(menuList);
  if (menuList.length === 0) return <OrderModalRightContainer />;

  return (
    <OrderModalRightContainer>
      {menuList.map((menu, index) => (
        <div key={index}>{menu.orderName}</div>
      ))}
    </OrderModalRightContainer>
  );
};

export default OrderModalRight;

const OrderModalRightContainer = styled.div`
  width: 50%;
  border: 1px solid black;
  overflow: scroll;

  div {
    height: 120px;
    border: 1px solid black;
    ${flexCenter};
  }
`;
