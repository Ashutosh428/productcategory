import React from "react";
// import css from '../css/style.css';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Tempapp = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=841fdb82c84f38382d5a20271f46b762`;
      const response = await fetch(url);
      const resjson = await response.json();
      setcity(resjson.main);
    };
    fetchapi();
  }, [search]);

  return (
    <>
      <div className="box text-center col-md-6 offset-md-3 col-lg-6 offset-lg-3 h25">
        <div className="inputdata">
          <input
            type="search"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No data found</p>
        ) : (
          <>
          <div className="info mt5">
            <div className="location">
              <i className="fa-solid fa-street-view text-white"></i>
              {search}
            </div>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="tempmin_max ">
              {" "}
              Min: 5.25°cel | Max: {city.temp_max}{" "}
            </h3>
          </div>

          // for animation 
        
<div class="waveAnimation">
  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
    <path
    class="w1 waveTop"
    d="M-8.74,71.55 C289.78,255.11 349.60,4.47 505.36,34.05 L500.00,150.00 L0.00,150.00 Z"
    />
    <path
    class="w2 waveMiddle"
    d="M-23.42,125.83 C187.63,45.89 299.38,57.73 526.80,123.86 L500.00,150.00 L0.00,150.00 Z"
    />
    <path
    class="w3 waveBottom"
    d="M-23.42,125.83 C172.96,-152.44 217.55,183.06 504.22,55.77 L500.00,150.00 L0.00,150.00 Z"
    />
  </svg>
</div>
</>
          
        )}
      </div>
    </>
  );
};

export default Tempapp;
