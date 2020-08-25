import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TableDetail from "./Component/Main/TableInfo";
import TableList from "./Component/Main/TableList";
import TotalAmount from "./Component/Main/TotalAmount";
import Time from "./Component/Main/Time";
import { flexCenter, flexSpaceBetween } from "./Styles/Theme";
import DataTableList from "./mokData/DataTableList";
import OrderModal from "./Component/Modal/OrderModal";

const Main = () => {
  const [tableDataList, setTableDataList] = useState(DataTableList);
  const [tableInfo, setTableInfo] = useState();

  useEffect(() => {
    setTableInfo(tableDataList[0]);
  }, []);

  const onUpdateTable = (table) => {
    setTableInfo(table);
  };

  return (
    <MainContainer>
      <OrderModal />
      <MainContent>
        <Header>{/* <Time /> */}</Header>
        <Center>
          {tableInfo && <TableDetail tableInfo={tableInfo} />}
          <TableList
            tableDataList={tableDataList}
            onUpdateTable={onUpdateTable}
          />
        </Center>
        <TotalAmount />
      </MainContent>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 1730px;
`;

const MainContent = styled.div`
  width: 1730px;
  background-color: #e9e9e9;
  border: 1px solid black;
  /* position: fixed; */
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  margin: 10px 0;
  /* ${flexSpaceBetween}; */
  border: 1px solid black;
`;

const Center = styled.div`
  ${flexCenter};
`;
