import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Table from "./Table";

const TableList = () => {
  const [tableList, setTableList] = useState([]);

  const nextId = useRef(0);

  useEffect(() => {
    setTableList(...tableList, [
      {
        tableId: 1,
        tableName: "테이블1",
        tableMebers: 1,
      },
      {
        tableId: 2,
        tableName: "테이블2",
        tableMebers: 1,
      },
    ]);

    nextId.current = 2;
  }, []);

  const onCreateTable = () => {
    nextId.current += 1;

    const newTable = {
      tableId: nextId.current,
      tableName: `테이블${nextId.current}`,
    };
    setTableList([...tableList, newTable]);
  };

  const onDeleteTable = (id) => {
    const newTable = tableList.filter((table) => id !== table.tableId);

    setTableList(newTable);
  };

  const onUpdateTable = (id) => {
    setTableList(
      tableList.map((table) =>
        table.tableId === id
          ? { ...table, tableMebers: table.tableMebers + 1 }
          : table
      )
    );
  };

  return (
    <TableListContainer>
      {tableList.map((table) => (
        <Table
          key={table.tableId}
          table={table}
          onDeleteTable={onDeleteTable}
          onUpdateTable={onUpdateTable}
        />
      ))}
    </TableListContainer>
  );
};

export default TableList;

const TableListContainer = styled.div`
  height: 800px;
  width: 60%;
  border: 1px solid blue;
`;
