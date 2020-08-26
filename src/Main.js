import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import TableDetail from "./Component/Table/TableInfo";
import TableList from "./Component/Table/TableList";
import TotalAmount from "./Component/Table/TotalAmount";
import Time from "./Component/Table/Time";
import { flexCenter, flexSpaceBetween } from "./Styles/Theme";
import DataTableList from "./mokData/DataTableList";
import OrderModal from "./Component/Modal/OrderModal";

const Main = () => {
  const [tableDataList, setTableDataList] = useState(DataTableList);
  const [tableInfo, setTableInfo] = useState();
  const [nowTableIndex, setNowTableIndex] = useState(0);
  const [isValidModal, setIsValidModal] = useState(false);

  const moveTop = useRef();

  useEffect(() => {
    setTableInfo(tableDataList[nowTableIndex]);
  }, []);

  useEffect(() => {
    setTableInfo(tableDataList[nowTableIndex]);
  }, [tableDataList]);

  const onChangeTable = (table) => {
    setTableInfo(table);
  };

  const onUpdateTable = (tableFoodList, tableIndex, memberCount) => {
    if (memberCount === 0) {
      alert("인원 수가 0 입니다.");
      return;
    }

    if (tableFoodList.length === 0) {
      alert("메뉴를 입력하지 않았습니다.");
      return;
    }

    const today = new Date();
    const data =
      ("0" + today.getHours()).slice(-2) +
      ":" +
      ("0" + today.getMinutes()).slice(-2) +
      ":" +
      ("0" + today.getSeconds()).slice(-2);

    setTableDataList(
      tableDataList.map((table) => {
        if (table.tableIndex === tableIndex) {
          return {
            ...table,
            persons: memberCount,
            food: tableFoodList,
            startTime: table.startTime === "00:00:00" ? data : table.startTime,
          };
        } else {
          return table;
        }
      })
    );

    setNowTableIndex(tableIndex - 1);
    setIsValidModal(false);
  };

  const onHandleModal = () => {
    setIsValidModal(true);

    const location = moveTop.current.offsetTop;
    const menuHeight = moveTop.current.offsetHeight;

    window.scrollTo({ top: location, behavior: "smooth" });
  };

  return (
    <MainContainer ref={moveTop}>
      {isValidModal && tableInfo && (
        <OrderModal
          tableInfo={tableInfo}
          onUpdateTable={onUpdateTable}
          setIsValidModal={setIsValidModal}
        />
      )}
      <MainContent>
        <Header>
          <Time />
        </Header>
        <Center>
          {tableInfo && (
            <TableDetail tableInfo={tableInfo} onHandleModal={onHandleModal} />
          )}
          <TableList
            tableDataList={tableDataList}
            onChangeTable={onChangeTable}
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
