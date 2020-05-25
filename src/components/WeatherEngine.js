import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({location}) => {
  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=a229c94e552affccf81ddd93841a06d4`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
      // console.log(res.weather[0].main)
    });
  };

  useEffect(() => {
    getWeather(location).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
      // console.log(res.weather[0].main)
    });
  }, [location]);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      {/* <WeatherCard temp={12} condition="Rain" city="Ottawa" country="CA" />
      <WeatherCard temp={37} condition="Dust" city="Delhi" country="IN" /> */}
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
