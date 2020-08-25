import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsPersonSquare } from "react-icons/bs";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import OrderModalRight from "./OrderModalRight";
import { flexCenter, flexSpaceBetween } from "../../Styles/Theme";
import DatamenuList from "../../mokData/DatamenuList";

const OrderModal = () => {
  const [orderIndex, setOrderIndex] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [member, setMember] = useState(0);

  useEffect(() => {
    //api 연동으로 값 가지고 오기
    setMenuList(DatamenuList.main);
  }, []);

  useEffect(() => {
    if (orderIndex === 0) setMenuList(DatamenuList.main);
    if (orderIndex === 1) setMenuList(DatamenuList.sub);
    if (orderIndex === 2) setMenuList(DatamenuList.drink);
    if (orderIndex === 3) setMenuList(DatamenuList.ect);
  }, [orderIndex]);

  const onHandleMember = (direction) => {
    if (direction === "left" && member > 0) {
      setMember(member - 1);
    } else {
      setMember(member + 1);
    }
  };

  return (
    <OrderModalContainer>
      <OrderModalHeader>
        <div onClick={() => setOrderIndex(0)}>Main</div>
        <div onClick={() => setOrderIndex(1)}>Sub</div>
        <div onClick={() => setOrderIndex(2)}>Drink</div>
        <div onClick={() => setOrderIndex(3)}>Beverage</div>
      </OrderModalHeader>
      <OrderModalCenter>
        <OrderLeft>
          <MemberCount>
            <TableNumberCircle>1</TableNumberCircle>
            <TableNumberCount>
              <BsPersonSquare size="50" color="#819ff7" />
              <AiFillCaretLeft
                cursor="pointer"
                onClick={() => onHandleMember("left")}
              />
              {member}
              <AiFillCaretRight
                cursor="pointer"
                onClick={() => onHandleMember("right")}
              />
            </TableNumberCount>
          </MemberCount>
        </OrderLeft>
        <OrderModalRight menuList={menuList} />
      </OrderModalCenter>
      <OrderModalFooter>
        <Button></Button>
        <Button></Button>
      </OrderModalFooter>
    </OrderModalContainer>
  );
};

export default OrderModal;

const OrderModalContainer = styled.div`
  top: 5%;
  left: 25%;
  height: 680px;
  width: 800px;
  background-color: white;
  border: 1px solid black;
  position: fixed;
`;

const OrderModalHeader = styled.div`
  height: 80px;
  width: 100%;
  display: flex;

  div {
    ${flexCenter};
    font-size: 30px;
    color: white;
    cursor: pointer;

    &:nth-child(1) {
      width: 25%;

      background-color: #d9480f;
    }

    &:nth-child(2) {
      width: 25%;
      background-color: #e8590c;
    }

    &:nth-child(3) {
      width: 25%;
      background-color: #f76707;
    }

    &:nth-child(4) {
      width: 25%;
      background-color: #fd7e14;
    }
  }
`;

const OrderModalCenter = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
`;
const OrderLeft = styled.div`
  width: 50%;
  border-right: 1px solid black;
`;

const MemberCount = styled.div`
  height: 60px;
  ${flexSpaceBetween};
  border-bottom: 1px solid #ddd;
`;

const TableNumberCircle = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  ${flexCenter};
  border-radius: 50%;
  font-size: 30px;
  font-weight: bold;
  color: white;
  background-color: #819ff7;
`;

const TableNumberCount = styled.div`
  width: 150px;
  ${flexSpaceBetween};
  font-size: 30px;
  user-select: none;
`;

const BtnCounter = styled.div`
  font-size: 40px;
`;

const OrderModalFooter = styled.div`
  height: 100px;
  width: 100%;
  ${flexSpaceBetween};
  border-top: 1px solid black;
`;

const Button = styled.div`
  height: 60px;
  width: 200px;
  margin: 0 60px;
  border-radius: 10px;
  background-color: blue;
`;
