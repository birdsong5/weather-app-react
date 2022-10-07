import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weatherdata(props) {
  return (
    <div className="row">
      <div className="col-md-5">
        <h1>{props.data.city}</h1>
        <div className="temp-now">
          <div className="icon">
            <WeatherIcon code={props.data.icon} size={110} width={110} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <h4>{props.data.description}</h4>
      </div>
      <div className="col-md-7">
        <div className="weather-today">
          <FormattedDate date={props.data.date} />
          <div className="weather-info-box">
            <div className="wind-box">
              <span role="img">💨</span> Wind:{" "}
              <div className="wind-data">{props.data.wind} km/h</div>
            </div>
            <div className="humidity-box">
              <span role="img">💧</span>Humidity:{" "}
              <div className="humidity-data">{props.data.humidity}%</div>
            </div>
            <div className="feels-like-box">
              <span role="img">🌡</span>Feels like{" "}
              <div className="feels-like-data">{props.data.feels}°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
