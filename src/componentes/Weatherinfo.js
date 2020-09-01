import React from "react";
import Icon from "./Icon";

const WeatherInfo = (props) => {
  console.log(props);
  return (
    <div className="text-center">
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}

      {props.temperature ? (
        <div className="card card-body mt-4 animated fadeInUp">
          {props.city && props.country && (
            <h1>
              {props.city}, {props.country}
            </h1>
          )}
          <div className="text-center">
            <Icon icon={props.icon} />
          </div>
          {props.temperature && (
            <h1>
              {props.temperature} ℃
              <br />
              {props.description}
            </h1>
          )}
          {props.humidity && <h3>Humedad: {props.humidity}%</h3>}
          {props.wind_speed && (
            <h4>Velocidad del viento: {props.wind_speed}</h4>
          )}
        </div>
      ) : (
        <div className="card card-body mt-2 text-center">
          <i className="fas fa-sun fa-10x"></i>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
