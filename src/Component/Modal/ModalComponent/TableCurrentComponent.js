import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Line } from "react-icons/ri";

const TableCurrentComponent = ({ tableFoodList, onHandleDeleteFood }) => {
  return (
    <TableCurrentInfo>
      {tableFoodList.length > 0 &&
        tableFoodList.map((menu, index) => (
          <li>
            <span>{index + 1}</span>
            <span>{menu.foodName}</span>
            <span>{menu.price}원</span>
            <span>X {menu.count}</span>
            <RiDeleteBack2Line
              size="30"
              cursor="pointer"
              onClick={() => onHandleDeleteFood(menu)}
            />
          </li>
        ))}
    </TableCurrentInfo>
  );
};

export default TableCurrentComponent;

const TableCurrentInfo = styled.div`
  height: 70%;
  overflow: scroll;
  overflow-x: hidden;
  border-bottom: 1px solid black;

  li {
    height: 40px;
    border-bottom: 1px solid blue;
    list-style: none;
    display: flex;
    align-items: center;

    span {
      font-size: 15px;

      &:nth-child(1) {
        width: 20px;
        margin-left: 10px;
      }

      &:nth-child(2) {
        width: 100px;
        margin-left: 10px;
      }

      &:nth-child(3) {
        width: 100px;
        margin-left: 20px;
      }

      &:nth-child(4) {
        margin: 0 25px;
      }
    }
  }
`;
