import React, { useState, useEffect } from "react";

const Time = () => {
  const [nowTime, setNowTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let today = new Date();
      let hh = today.getHours();
      let mi = today.getMinutes();
      let ss = today.getSeconds();

      const timeData = `${hh}:${mi}:${ss}`;
      console.log(timeData);
      setNowTime(timeData);
    }, 1000);
  }, [nowTime]);

  return <h1>현재 시간 : {nowTime}</h1>;
};

export default Time;
