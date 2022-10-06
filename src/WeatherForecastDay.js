import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <h6 className="card-subtitle">{props.data.weather[0].description}</h6>
        <WeatherIcon code={props.data.weather[0].icon} size={36} color="navy" />
        <img
          src=""
          alt=""
          className="d-none d-md-block forecast-icon"
          width="76"
        />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-max-temp">
            {maxTemperature()}°C
          </span>{" "}
          /
          <span className="weather-forecast-min-temp">
            {minTemperature()}°C
          </span>
        </div>
      </div>
    </div>
  );
}
