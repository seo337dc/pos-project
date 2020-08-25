import React, { useState, useEffect, useMemo } from "react";

const Time = () => {
  const [nowTime, setNowTime] = useState("");

  useEffect(() => {
    const timeInter = setInterval(() => {
      let today = new Date();
      let hh = today.getHours();
      let mi = today.getMinutes();
      let ss = today.getSeconds();

      const timeData = `${hh}:${mi}:${ss}`;
      setNowTime(timeData);
    }, 1000);

    return () => {
      clearInterval(timeInter);
    };
  }, []);

  return <h1>현재 시간 : {nowTime}</h1>;
};

export default Time;
