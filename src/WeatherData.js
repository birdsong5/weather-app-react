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
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <h4>{props.data.description}</h4>
      </div>
      <div className="col-md-7">
        <div className="weather-today">
          <FormattedDate date={props.data.date} />
          <div>
            Wind: <span>{props.data.wind}</span> km/h
          </div>
          <div>
            Humidity: <span>{props.data.humidity}</span>%
          </div>
          <div>
            Feels like <span>{props.data.feels}</span>
            <span>°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
