import React, { useState } from "react";
import { useLocalStorage } from "./componentes/UseLocalStorage";

const api = {
  key: "be8e50436cd1cd32bfadf4bdcfc1ab8f",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [city, setCity] = useLocalStorage("city");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${api.base}weather?q=${city}&appid=be8e50436cd1cd32bfadf4bdcfc1ab8f&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main className="text-center">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                Temperatura actual: {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather ">{weather.weather[0].main}</div>
              <div className="humidity">Humedad: {weather.main.humidity} %</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
