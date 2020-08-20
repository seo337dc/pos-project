import React from "react";
import styled from "styled-components";
import TableDetail from "./Component/Main/TableInfo";
import TableList from "./Component/Main/TableList";
import TotalAmount from "./Component/Main/TotalAmount";
import Time from "./Component/Main/Time";

const Main = () => {
  // const focusTable = useRef();

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
  height: 1000px;
  border: 1px solid black;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
