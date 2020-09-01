import React from "react";

const Icon = (props) => (
  <img src={`http://openweathermap.org/img/w/${props.icon}.png`} width="150" />
);

export default Icon;
