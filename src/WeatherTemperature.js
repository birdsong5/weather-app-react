import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="temperature-now-span">
        {props.celsius}
        <span className="units">
          <span className="celsiusUnit">°C</span> |
          <span className="fahrenheitUnit">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature-now-span">
        {Math.round(fahrenheit())}
        <span className="units">
          <span className="celsiusUnit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
          |<span className="fahrenheitUnit"> °F</span>
        </span>
      </span>
    );
  }
}
