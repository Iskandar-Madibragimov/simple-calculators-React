import React, { Component, useState } from "react";
import { ConverterWrapper } from "./style";

function Converter() {
  const [farinheit, setFarinheit] = useState();

  function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    setFarinheit(celsius * (9 / 5) + 32);
  }

  return (
    <ConverterWrapper>
      <h1>Temperature Converter</h1>
      <p>Temperature in C°</p>
      <input type="number" id="celsius" />
      <button onClick={convertToFahrenheit}>Submit</button>
      <p id="convert">The teperature in F° is {farinheit}</p>
    </ConverterWrapper>
  );
}

export default Converter;
