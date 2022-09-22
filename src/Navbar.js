import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <form className="search-form" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search for a city.."
          aria-label="Search"
        />
        <button className="btn btn-outline-light search-btn" type="submit">
          Search
        </button>
        <button className="btn btn-outline-light location-btn" type="submit">
          My location
        </button>
      </form>
    </nav>
  );
}
