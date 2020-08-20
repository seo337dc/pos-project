import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Table = ({ table, onDeleteTable, onUpdateTable }) => {
  useEffect(() => {
    console.log("실행");
    return () => {
      alert(`${table.tableName}이 삭제 됩니다.`);
    };
  }, []);

  useEffect(() => {
    alert("손님이 늘었습니다.");
  }, [table]);

  return (
    <TableContaner>
      <button onClick={() => onDeleteTable(table.tableId)}>삭제</button>
      <button onClick={() => onUpdateTable(table.tableId)}>수정</button>
      <div>{table.tableName}</div>
      <div>{table.tableMebers}</div>
    </TableContaner>
  );
};

export default Table;

const TableContaner = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid blue;
`;
