import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-md-5">
        <h1>Prague</h1>
        <div className="temp-now">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            id="icon"
          />
          <span className="temperature-now-span">18°C</span>
        </div>
        <h4>Sunny</h4>
      </div>
      <div className="col-md-7">
        <div className="weather-today">
          <div className="day-today">Sunday, September 11</div>
          <div className="time-now">18:11</div>
          <div>
            Wind: <span>7</span> km/h
          </div>
          <div>
            Humidity: <span>67</span>%
          </div>
          <div>
            Feels like <span>18</span>
            <span>°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
