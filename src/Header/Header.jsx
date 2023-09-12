import "./Header.css";
import { useState, useEffect } from "react";
import logo from "./logo.png";
import LoginIcon from "./loginIcon.png";
import ScanIcon from "./scanIcon.png";
import PayIcon from "./payIcon.png";
import FeedbackIcon from "./feedbackIcon.png";
// import hourglass from "https://i.gifer.com/XVo6.gif";

export default function Header2() {
  // Data Variables
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateNum = date.getDate();
  const day = date.getDay();
  const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][day];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][month];
  const currentTime = useRealTimeClock();

  return (
    <div className="header">
      <div>
        <img src={logo} style={{ width: "43.2%" }} />
      </div>

      <ProgressBar />

      <div
        className="dateTime"
        style={{
          padding: "20px",
        }}
      >
        <div
          className="dateAndDay"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px",
            marginBottom: "5px",
          }}
        >
          {/* Date */}
          <div>
            {dateNum} {monthName}, {year}
          </div>

          {/* Day */}
          <div
            className="day"
            style={{
              border: "1px solid black",
              background: "black",
              color: "white",
              padding: "2px",
              margin: "0 8px",
              fontSize: "12px",
            }}
          >
            {dayName}
          </div>
        </div>
        {/* Horizontal Line (168px) */}
        <div
          style={{ borderBottom: "1px solid black", width: "100%" }}
        ></div>{" "}
        {/* Time */}
        <div
          className="time"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginRight: "10px",
            }}
          >
            <div
              style={{ margin: "0 10px", width: "63px", textAlign: "right" }}
            >
              {convertTo12HourFormat(currentTime)[0]}
            </div>
            <strong style={{}}>{convertTo12HourFormat(currentTime)[1]}</strong>
          </div>
        </div>
      </div>
    </div>
  );

  // Real-Time Clock
  function useRealTimeClock() {
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
    return currentDate;
  }

  // 24-to-12 Conversion
  function convertTo12HourFormat() {
    let date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = hours < 10 ? "0" + hours : hours;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    const secondsStr = seconds < 10 ? "0" + seconds : seconds;
    const strTime = hoursStr + ":" + minutesStr + ":" + secondsStr;
    return [strTime, ampm];
  }
}

function ProgressBar() {
  return (
    <div className="progress-bar">
      <Circle imgSrc={LoginIcon} />
      <HorizontalLine />
      <Circle imgSrc={ScanIcon} />
      <HorizontalLine />
      <Circle imgSrc={PayIcon} />
      <HorizontalLine />
      <Circle imgSrc={FeedbackIcon} />
    </div>
  );
}

function Circle({ imgSrc }) {
  return (
    <div className="circle">
      <img className="progress-bar-img" src={imgSrc} />
    </div>
  );
}

function HorizontalLine() {
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        width: "50px",
        margin: "0px 3px",
      }}
    ></div>
  );
}
