import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderModalRight from "./OrderModalRight";
import { flexCenter, flexSpaceBetween } from "../../Styles/Theme";

const OrderModal = () => {
  const menuMok = {
    main: [
      {
        orderName: "크림 파스타",
        imageName: "creampasta",
        price: "20000",
      },

      {
        orderName: "로제 파스타",
        imageName: "rosepasta",
        price: "20000",
      },
      {
        orderName: "마라 탕",
        imageName: "malasoup",
        price: "25000",
      },
      {
        orderName: "계란 탕",
        imageName: "eggsoup",
        price: "10000",
      },
    ],

    sub: [
      {
        orderName: "밥",
        imgName: "rice",
        price: "1000",
      },
      {
        orderName: "땅콩",
        imgName: "bean",
        price: "2000",
      },
    ],

    drink: [
      {
        orderName: "진로",
        imgName: "jinlo",
        price: "4000",
      },
      {
        orderName: "후레시",
        imgName: "fresh",
        price: "4000",
      },
      {
        orderName: "처음처럼",
        imgName: "likenew",
        price: "4000",
      },
      {
        orderName: "카스",
        imgName: "cass",
        price: "5000",
      },
    ],

    ect: [
      {
        orderName: "물",
        imgName: "water",
        price: "10000",
      },
    ],
  };

  const [orderIndex, setOrderIndex] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [member, setMember] = useState(0);

  useEffect(() => {
    //api 연동으로 값 가지고 오기
    setMenuList(menuMok.main);
  }, []);

  useEffect(() => {
    if (orderIndex === 0) setMenuList(menuMok.main);
    if (orderIndex === 1) setMenuList(menuMok.sub);
    if (orderIndex === 2) setMenuList(menuMok.drink);
    if (orderIndex === 3) setMenuList(menuMok.ect);
  }, [orderIndex]);

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
            <div>테이블 번호</div>
            <div>
              인원 수<button>+</button>
              {member}
              <button>-</button>
            </div>
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
  border: 1px solid black;
  display: flex;
`;
const OrderLeft = styled.div`
  width: 50%;
  border: 1px solid black;
`;

const MemberCount = styled.div`
  height: 50px;
  ${flexSpaceBetween};
  border: 1px solid black;
`;

const OrderModalFooter = styled.div`
  height: 100px;
  width: 100%;
  ${flexSpaceBetween};
  border: 1px solid black;
`;

const Button = styled.div`
  height: 60px;
  width: 200px;
  margin: 0 60px;
  border-radius: 10px;
  background-color: blue;
  border: 1px solid black;
`;
