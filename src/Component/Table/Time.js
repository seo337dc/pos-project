import React, { useState, useEffect, useMemo } from "react";

const Time = () => {
  const [nowTime, setNowTime] = useState("");

  useEffect(() => {
    const timeInter = setInterval(() => {
      let today = new Date();

      setNowTime(
        ("0" + today.getHours()).slice(-2) +
          ":" +
          ("0" + today.getMinutes()).slice(-2) +
          ":" +
          ("0" + today.getSeconds()).slice(-2)
      );
    }, 1000);

    return () => {
      clearInterval(timeInter);
    };
  }, []);

  return <h1>현재 시간 : {nowTime}</h1>;
};

export default Time;
