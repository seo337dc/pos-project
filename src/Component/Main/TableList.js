import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "./Table";
import { flexCenter } from "../../Styles/Theme";

const TableList = ({ tableDataList, onUpdateTable }) => {
  console.log(tableDataList);

  return (
    <TableListContainer>
      {tableDataList.map((table) => (
        <Table
          key={table.tableIndex}
          table={table}
          onUpdateTable={onUpdateTable}
        />
      ))}
    </TableListContainer>
  );
};

export default TableList;

const TableListContainer = styled.div`
  height: 750px;
  width: 75%;
  margin: 10px 10px;
  ${flexCenter};
  overflow: scroll;
  flex-flow: row wrap;
  box-shadow: 3px 3px 3px 3px gray;
  background-color: #f5f5dc;
`;
