import React from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {}
  console.log(props);

  let apiKey = "468253ff0d2c7b9f49a43bcd7fd91cbf";
  let lat = props.coordinates.lon;
  let lon = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast">
      <div className="container">
        <div className="row row-cols-lg-5 row-cols-md-5">
          <div className="col-12 col-lg col-md forecast-col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sunday</h5>
                <h6 className="card-subtitle">Clear Sky</h6>
                <img
                  src=""
                  alt=""
                  className="d-none d-md-block forecast-icon"
                  width="76"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-max-temp">24°C</span> /
                  <span className="weather-forecast-min-temp">14°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg col-md forecast-col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sunday</h5>
                <h6 className="card-subtitle">Clear Sky</h6>
                <img
                  src=""
                  alt=""
                  className="d-none d-md-block forecast-icon"
                  width="76"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-max-temp">24°C</span> /
                  <span className="weather-forecast-min-temp">14°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg col-md forecast-col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sunday</h5>
                <h6 className="card-subtitle">Clear Sky</h6>
                <img
                  src=""
                  alt=""
                  className="d-none d-md-block forecast-icon"
                  width="76"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-max-temp">24°C</span> /
                  <span className="weather-forecast-min-temp">14°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg col-md forecast-col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sunday</h5>
                <h6 className="card-subtitle">Clear Sky</h6>
                <img
                  src=""
                  alt=""
                  className="d-none d-md-block forecast-icon"
                  width="76"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-max-temp">24°C</span> /
                  <span className="weather-forecast-min-temp">14°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg col-md forecast-col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sunday</h5>
                <h6 className="card-subtitle">Clear Sky</h6>
                <img
                  src=""
                  alt=""
                  className="d-none d-md-block forecast-icon"
                  width="76"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-max-temp">24°C</span> /
                  <span className="weather-forecast-min-temp">14°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
