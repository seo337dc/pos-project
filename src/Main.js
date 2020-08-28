import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TableInfo from "./Component/Table/TableInfo";
import TableList from "./Component/Table/TableList";
import TotalAmount from "./Component/Table/TotalAmount";
import Time from "./Component/Table/Time";
import { flexCenter, flexSpaceBetween } from "./Styles/Theme";
import OrderModal from "./Component/Modal/OrderModal";

const modalValidSelector = (state) => state.reducerModal.isValid;
const Main = () => {
  const isValidModal = useSelector(modalValidSelector);
  const moveTop = useRef();

  return (
    <MainContainer ref={moveTop}>
      {isValidModal && <OrderModal moveTop={moveTop} />}
      <MainContent>
        <Header>
          <Time />
        </Header>
        <Center>
          <TableInfo moveTop={moveTop} />
          <TableList />
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
