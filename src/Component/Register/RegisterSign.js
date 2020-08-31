import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import useReactRouter from "use-react-router";
import { flexCenter } from "../../Styles/Theme";

function RegisterSign() {
  const [inputText, setInputText] = useState({ phone: "", code: "" });
  const [codeStatus, setCodeStatus] = useState("");
  const [isValidCodeInput, setIsValidCodeInput] = useState(false);
  const [nowTime, setNowTime] = useState("00:00");
  const [isRestart, setIsRestart] = useState(false);

  const { history } = useReactRouter();

  useEffect(() => {
    localStorage.clear();
    let timeInter;
    let SetTime = 60;
    console.log(isValidCodeInput, isRestart);
    if (isValidCodeInput) {
      timeInter = setInterval(() => {
        setTimer(SetTime);
        SetTime--;
      }, 1000);
      if (isRestart) {
        clearInterval(timeInter);
        setIsRestart(false);
        SetTime = 60;
      }
    }

    return () => {
      clearInterval(timeInter);
    };
  }, [isValidCodeInput, isRestart]);

  const onChangeInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const onClickPhone = () => {
    // 서버 api 필요
    let codeData = "";
    for (let i = 0; i < 4; i++) {
      const num = Math.random();
      codeData = codeData + Math.floor(num * 10);
    }

    console.log(codeData);

    setCodeStatus(codeData);
    setIsValidCodeInput(true);
    if (isValidCodeInput) {
      alert("다시 코드를 보냈습니다.");
      setIsRestart(true);
    } else {
      alert("핸드폰 번호로 코드를 보냈습니다. ");
    }
  };

  const onClickCode = () => {
    if (inputText.code === codeStatus) {
      alert("확인");
      setIsValidCodeInput(false);
      localStorage.setItem("code", inputText.code);
      history.push("/main");
    } else {
      alert("다시 입력");
    }
  };

  const setTimer = (SetTime) => {
    let mu = Math.floor(SetTime / 60);
    let se = SetTime % 60;
    SetTime--;

    setNowTime("0" + mu + ":" + ("0" + se).slice(-2));
  };

  console.log(nowTime);
  return (
    <SignInContainer>
      <div>
        <TitleContainer>Sign Up</TitleContainer>
        <PhoneContainer>
          <InputContainer>
            <span>번호 입력 : </span>
            <input
              placeholder={` "-" 없이 번호만 입력하세요.`}
              value={inputText.phone}
              name="phone"
              onChange={onChangeInput}
            />
            <button onClick={onClickPhone}>보내기</button>
          </InputContainer>
          <CheckContainer>
            <span>만료 시간 : </span> <span>{nowTime}</span>
          </CheckContainer>
        </PhoneContainer>
        <CodeConatiner isValidCodeInput={isValidCodeInput}>
          <span>코드 입력 :</span>
          <input
            value={inputText.code}
            name="code"
            onChange={onChangeInput}
            disabled={!isValidCodeInput}
          />
          <button
            onClick={() => onClickCode()}
            disabled={!isValidCodeInput && "disabled"}
          >
            확인
          </button>
        </CodeConatiner>
      </div>
    </SignInContainer>
  );
}

export default RegisterSign;

const SignInContainer = styled.div`
  width: 1000px;
  height: 300px;
  margin: 20px auto;
  ${flexCenter};
  background-color: white;
  box-shadow: 3px 3px 3px 3px gray;
`;

const TitleContainer = styled.div`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
  ${flexCenter};
`;

const PhoneContainer = styled.div`
  width: 900px;
  height: 100px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  height: 50px;
  ${flexCenter};

  span {
    margin-right: 20px;
    font-size: 25px;
    font-weight: bold;
  }

  input {
    margin-right: 20px;
    height: 25px;
    width: 300px;
    font-size: 20px;
    outline: 0;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;

    /* 버튼 클릭 전 */
    border: 0;
    outline: 0;
    background-color: blue;
    color: white;

    /* 버튼 클릭 후 */
  }
`;

const CheckContainer = styled.div`
  height: 50px;
  ${flexCenter};

  span {
    font-size: 20px;
    margin-right: 10px;
    color: blue;
  }
`;

const CodeConatiner = styled.div`
  width: 900px;
  height: 100px;
  margin: 10px auto;
  ${flexCenter};

  span {
    margin-right: 20px;
    font-size: 25px;
    font-weight: bold;
  }

  input {
    margin-right: 20px;
    height: 25px;
    width: 150px;
    font-size: 20px;
    outline: 0;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    font-weight: bold;
    border: 0;
    outline: 0;
    color: white;

    ${(props) =>
      !props.isValidCodeInput
        ? css`
            background-color: grey;
          `
        : css`
            background-color: blue;
            cursor: pointer;
          `}
  }
`;
