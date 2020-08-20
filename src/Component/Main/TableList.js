import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Table from "./Table";
import { flexCenter } from "../../Styles/Theme";

const TableList = () => {
  const [tableList, setTableList] = useState([]);

  const nextId = useRef(0);

  useEffect(() => {
    const nowTableList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    nowTableList.map((index) => {
      return { tableId: index, tableName: `테이블${index}`, tableMebers: 0 };
    });

    setTableList(
      nowTableList.map((index) => {
        return { tableId: index, tableName: `테이블${index}`, tableMebers: 0 };
      })
    );

    nextId.current = nowTableList.length + 1;
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
  height: 750px;
  width: 75%;
  margin: 10px 10px;
  ${flexCenter};
  flex-flow: row wrap;
  box-shadow: 3px 3px 3px 3px gray;
  background-color: #f5f5dc;
`;
