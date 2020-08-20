import React from "react";
import styled from "styled-components";
import TableDetail from "./Component/Main/TableInfo";
import TableList from "./Component/Main/TableList";
import TotalAmount from "./Component/Main/TotalAmount";
import Time from "./Component/Main/Time";

const Main = () => {
  return (
    <MainContainer>
      <Header>{/* <Time /> */}</Header>
      <Center>
        <TableDetail />
        <TableList />
      </Center>
      <TotalAmount />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  border: 1px solid black;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid black;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
