import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../Styles/Theme";
import RegisterSign from "./RegisterSign";

function RegisterMain() {
  return (
    <RegisterMainContainer>
      <RegisterCenter>
        <RegisterSign />
        <SignUpContainer></SignUpContainer>
      </RegisterCenter>
    </RegisterMainContainer>
  );
}

export default RegisterMain;

const RegisterMainContainer = styled.div`
  width: 1730px;
  height: 750px;
  ${flexCenter};
  background-color: #e9e9e9;
  border: 1px solid black;
`;

const RegisterCenter = styled.div`
  width: 1500px;
  height: 650px;
`;

const SignUpContainer = styled.div`
  width: 1000px;
  height: 300px;
  margin: 10px auto;
  background-color: white;
  border: 1px solid black;
  box-shadow: 3px 3px 3px 3px gray;
`;