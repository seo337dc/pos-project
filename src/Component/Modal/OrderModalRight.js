import React from "react";
import styled from "styled-components";
import MenuComponent from "./ModalComponent/MenuComponent";

const OrderModalRight = ({ menuList, onHandleCurrentTable }) => {
  if (menuList.length === 0) return <OrderModalRightContainer />;

  return (
    <OrderModalRightContainer>
      {menuList.map((menu, index) => (
        <MenuComponent
          key={index}
          menu={menu}
          onHandleCurrentTable={onHandleCurrentTable}
        />
      ))}
    </OrderModalRightContainer>
  );
};

export default OrderModalRight;

const OrderModalRightContainer = styled.div`
  width: 50%;
  overflow: scroll;
`;
