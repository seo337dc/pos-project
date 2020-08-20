import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme, { flexSpaceBetween, flexCenter } from "../../Styles/Theme";

const Table = ({ table, onDeleteTable, onUpdateTable }) => {
  useEffect(() => {
    console.log("실행");
    return () => {
      alert(`${table.tableName}이 삭제 됩니다.`);
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("이전 table 값 : ", table);
      alert("손님이 늘었습니다.");
    };
  }, [table]);

  return (
    <TableContaner>
      <TableHeader>
        <span>3</span>
        <div>호출</div>
      </TableHeader>
      <TableCenter>
        <ul>
          <li>
            <span>크림 파스타</span> <span>1</span>
          </li>
          <li>
            <span>로제 파스타</span> <span>1</span>
          </li>
          <li>
            <span>탄산 음료</span> <span>1</span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </TableCenter>
      <TableFooter>
        <span>4500</span>
        <span>원</span>
      </TableFooter>
    </TableContaner>
  );
};

export default Table;

const TableContaner = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  background-color: #c8c8b4;
  cursor: pointer;
`;

const TableHeader = styled.div`
  width: auto;
  height: 30px;
  ${flexSpaceBetween};
  border-radius: 10px 10px 0 0;
  background-color: #facc2e;

  span {
    margin: 0 10px;
    font-size: 20px;
    font-weight: bold;
  }

  div {
    width: 50px;
    height: 22px;
    margin: 0 10px;
    ${flexCenter};
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: red;
  }
`;

const TableCenter = styled.div`
  width: auto;
  height: 134px;

  ul {
    height: 134px;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: white;

    li {
      height: 20px;
      ${flexSpaceBetween};
      border-bottom: 1px solid blue;

      span {
        margin: 0 10px;
      }
    }
  }
`;
const TableFooter = styled.div`
  height: 30px;
  border-radius: 0 0 10px 10px;
  ${flexSpaceBetween};

  span {
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;
