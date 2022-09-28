import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function Weatherdata(props) {
  return (
    <div className="row">
      <div className="col-md-5">
        <h1>{props.data.city}</h1>
        <div className="temp-now">
          <div id="icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <span className="temperature-now-span">
            {props.data.temperature}°C
          </span>
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
