import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useReactRouter from "use-react-router";
import styled from "styled-components";
import TableInfo from "./Component/Table/TableInfo";
import TableList from "./Component/Table/TableList";
import Time from "./Component/Table/Time";
import { flexCenter, flexSpaceBetween } from "./Styles/Theme";
import OrderModal from "./Component/Modal/OrderModal";

const modalValidSelector = (state) => state.reducerModal.isValid;
const Main = () => {
  const { history } = useReactRouter();
  const isValidModal = useSelector(modalValidSelector);
  const moveTop = useRef();

  useEffect(() => {
    console.log(localStorage.getItem("code"));
    if (!localStorage.getItem("code") || localStorage.getItem("code") === "") {
      alert("코드 입력부터 하시길 바랍니다.");
      history.push("/");
    }
  }, []);

  if (!localStorage.getItem("code")) return null;

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
