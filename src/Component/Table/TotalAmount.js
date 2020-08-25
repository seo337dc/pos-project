import React, { useState, useMemo } from "react";
import styled from "styled-components";

const TotalAmount = () => {
  const [string, setString] = useState("");
  const [stringList, setStringList] = useState([]);

  const insert = () => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  };

  const sum = (list) => {
    console.log("문자들을 합치는 중입니다...");
    let stringSum = "";
    for (let value of list) {
      stringSum += value + " ";
    }
    return stringSum;
  };

  // const result = sum(stringList);
  const result = useMemo(() => {
    console.log("실행");
  }, [stringList]);

  console.log(result);

  return (
    <TotalAmountContainer>
      <input
        type="text"
        onChange={(e) => {
          setString(e.target.value);
        }}
      />
      <button onClick={insert}>문자열 추가</button>
      {result}
    </TotalAmountContainer>
  );
};

export default TotalAmount;

const TotalAmountContainer = styled.div`
  height: 150px;
  border: 1px solid red;

  input {
    height: 80px;
    width: 400px;
  }
`;
