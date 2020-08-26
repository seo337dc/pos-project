import React from "react";
import styled from "styled-components";
import { flexCenter, flexSpaceBetween } from "../../../Styles/Theme";

const MenuComponent = ({ menu, onHandleCurrentTable }) => {
  return (
    <MenuContainer onClick={() => onHandleCurrentTable(menu)}>
      <MenuImage>
        <img
          src={`${process.env.PUBLIC_URL}/images/MenuImage/${menu.imageName}.jpg`}
          alt={menu.imageName}
        />
      </MenuImage>
      <MenuInfo>
        <p>{menu.orderName}</p>
        <p>{menu.price} 원</p>
      </MenuInfo>
    </MenuContainer>
  );
};

export default MenuComponent;

const MenuContainer = styled.div`
  height: 120px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid black;
`;

const MenuImage = styled.div`
  width: 40%;
  height: 100%;
  ${flexCenter};

  img {
    height: 90%;
  }
`;

const MenuInfo = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  border-left: 1px solid black;

  p {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
`;
