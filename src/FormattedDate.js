import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let months = [
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
  ];
  let month = months[props.date.getMonth()];

  let date = props.date.getDate();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="time-updated">
      <div className="updated-line">Last updated on:</div>
      <div className="day-today">
        {day}, {month} {date}
        <div className="time-now">
          {hours}:{minutes}
        </div>
      </div>
    </div>
  );
}
