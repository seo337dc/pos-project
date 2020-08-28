import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Table from "./Table";
import { flexCenter } from "../../Styles/Theme";

const tableListSelector = (state) => state.reducerTableData.tableDataList;

const TableList = () => {
  const tableDataList = useSelector(tableListSelector);

  return (
    <TableListContainer>
      {tableDataList.map((table) => (
        <Table key={table.tableIndex} table={table} />
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
  flex-flow: row wrap;
  box-shadow: 3px 3px 3px 3px gray;
  background-color: #f5f5dc;
  overflow: scroll;
`;
