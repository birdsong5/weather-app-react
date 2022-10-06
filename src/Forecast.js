import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="container">
          <div className="row row-cols-lg-5 row-cols-md-5">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div
                    className="col-12 col-lg col-md forecast-col"
                    key={index}
                  >
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "468253ff0d2c7b9f49a43bcd7fd91cbf";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
