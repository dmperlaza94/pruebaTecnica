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
        <div className="card card-body mt-2 animated fadeInUp">
          {props.city && props.country && (
            <h1>
              {props.city}, {props.country}
            </h1>
          )}
          <div className="text-center">
            <Icon icon={props.icon} />
          </div>
          {props.temperature && (
            <h2>
              Temperature: {props.temperature} ℃
              <br /> {props.description}
            </h2>
          )}
          {props.humidity && <p>Humidity: {props.humidity}</p>}
          {props.wind_speed && <p>Wind Speed: {props.wind_speed}</p>}
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
