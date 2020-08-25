import React, { useEffect } from "react";
import styled from "styled-components";
import { BsPersonSquare } from "react-icons/bs";
import { flexCenter, flexSpaceBetween } from "../../Styles/Theme";

const TableInfo = ({ tableInfo }) => {
  return (
    <TableInfoContainer>
      <TableInfoHeader>
        <TableNumberCircle>{tableInfo.tableIndex}</TableNumberCircle>
        <TableEctInfo>
          <BsPersonSquare size="70" color="#819ff7" />
          <div>
            <p> 인원 수 : {tableInfo.persons} </p>
            <p> 입장 시간 : {tableInfo.startTime}</p>
          </div>
        </TableEctInfo>
      </TableInfoHeader>

      <TableInfoOrder>
        {tableInfo.food.map((foodData, index) => (
          <li>
            <span>{index + 1}</span>
            <span>{foodData.foodname}</span>
            <span>{foodData.amount}</span>
            <span>x {foodData.count}</span>
          </li>
        ))}
      </TableInfoOrder>

      <TableInfoAmount>
        <span>총 가격 : </span>
        <span>{tableInfo.totalAmount} 원</span>
      </TableInfoAmount>
      <TableInfoButton>
        <Button>주문/수정</Button>
        <Button>계산</Button>
        <Button>영수증</Button>
      </TableInfoButton>
    </TableInfoContainer>
  );
};

export default TableInfo;

const TableInfoContainer = styled.div`
  width: 35%;
  height: 750px;
  margin: 0 10px;
  background-color: white;
  box-shadow: 3px 3px 3px 3px gray;
`;

const TableInfoHeader = styled.div`
  height: 100px;
  ${flexSpaceBetween};
  border-bottom: 1px solid #ddd;
`;

const TableNumberCircle = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 10px;
  ${flexCenter};
  border-radius: 50%;
  font-size: 50px;
  font-weight: bold;
  color: white;
  background-color: #819ff7;
`;

const TableEctInfo = styled.div`
  ${flexSpaceBetween};

  div {
    margin: 0 10px;

    p {
      margin: 5px;

      &:nth-child(1) {
        color: red;
      }

      &:nth-child(2) {
        color: blue;
      }
    }
  }
`;

const TableInfoOrder = styled.div`
  height: 400px;
  overflow: scroll;

  li {
    height: 40px;
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid blue;

    span {
      font-size: 20px;

      &:nth-child(1) {
        width: 20px;
        margin-left: 10px;
      }

      &:nth-child(2) {
        width: 250px;
        margin-left: 10px;
      }

      &:nth-child(3) {
        width: 100px;
        margin-left: 40px;
      }

      &:nth-child(4) {
        margin-left: 40px;
      }
    }
  }
`;

const TableInfoAmount = styled.div`
  height: 80px;
  margin-top: 5px;
  ${flexSpaceBetween};
  font-size: 35px;
  border-bottom: 1px solid #ddd;

  span {
    margin: 0 20px;
  }
`;

const TableInfoButton = styled.div`
  height: 150px;
  margin-top: 5px;
  ${flexCenter};
`;

const Button = styled.div`
  height: 80px;
  width: 150px;
  margin: 0 20px;
  ${flexCenter};
  border-radius: 10px;
  font-size: 30px;
  color: white;
  background-color: #3104b4;
  cursor: pointer;
`;
