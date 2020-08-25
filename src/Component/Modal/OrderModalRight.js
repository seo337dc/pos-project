import React from "react";
import styled from "styled-components";
import MenuComponent from "./ModalComponent/MenuComponent";
import { flexCenter, flexSpaceBetween } from "../../Styles/Theme";

const OrderModalRight = ({ menuList }) => {
  console.log(menuList);
  if (menuList.length === 0) return <OrderModalRightContainer />;

  return (
    <OrderModalRightContainer>
      {menuList.map((menu, index) => (
        <MenuComponent key={index} menu={menu} />
      ))}
    </OrderModalRightContainer>
  );
};

export default OrderModalRight;

const OrderModalRightContainer = styled.div`
  width: 50%;
  overflow: scroll;
`;
