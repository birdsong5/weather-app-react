import React, { useState } from "react";
import axios from "axios";
import Weatherdata from "./WeatherData";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feels: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "468253ff0d2c7b9f49a43bcd7fd91cbf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayCity(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.ready) {
    return (
      <div>
        <div class="app-body">
          <div>
            <nav className="navbar">
              <form
                className="search-form"
                role="search"
                onSubmit={displayCity}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for a city.."
                  aria-label="Search"
                  onChange={updateCity}
                />
                <button
                  className="btn btn-outline-light search-btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
            <Weatherdata data={weatherInfo} />
          </div>
          <Forecast coordinates={weatherInfo.coordinates} />
        </div>
        <div className="author">
          <a
            className="git"
            href="https://github.com/birdsong5/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/inna-troian-772168239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inna Troian
          </a>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
