// WeatherApp.js
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  }); 
  let updateinfo= (newinfo)=>{
    setWeatherInfo(newinfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
      <SearchBox updateinfo={updateinfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
