import React from "react";
import styled from "styled-components";

const TitleApp = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  background: linear-gradient(to bottom right, blue, green);
  padding: 60px;
`;
const Header = () => {
  return (
    <header>
      <TitleApp>Aplicacion web para consultar el clima en tiempo real</TitleApp>
    </header>
  );
};

export default Header;
