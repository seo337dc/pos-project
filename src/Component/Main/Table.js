import React from "react";
import styled from "styled-components";
import theme, { flexSpaceBetween, flexCenter } from "../../Styles/Theme";

const Table = ({ table, onUpdateTable }) => {
  return (
    <TableContaner onClick={() => onUpdateTable(table)}>
      <TableHeader>
        <span>{table.tableIndex}</span>
        <CurrentState persons={table.persons}>{table.persons}</CurrentState>
      </TableHeader>
      <TableCenter>
        <ul>
          {table.food.map((food, index) => {
            if (index > 5) {
              return;
            } else {
              return (
                <li>
                  <span>{food.foodname}</span> <span>{food.count}</span>
                </li>
              );
            }
          })}
        </ul>
      </TableCenter>
      <TableFooter>
        <span>{table.totalAmount}</span>
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
`;

const CurrentState = styled.div`
  width: 50px;
  height: 22px;
  margin: 0 10px;
  ${flexCenter};
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => {
    if (props.persons > 0) {
      return "blue";
    } else {
      return "grey";
    }
  }};
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
