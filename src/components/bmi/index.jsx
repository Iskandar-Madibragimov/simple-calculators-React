import React, { Component, useState } from "react";
import { BMIWrapper } from "./style";

function BMI() {
  //   document.getElementById("submitBmi").onclick = function () {
  //     let weight = document.getElementById("weight").value;
  //     let height = document.getElementById("height").value;

  //     let BMI = weight / height ** 2;

  //     document.getElementById("answer").innerHTML = BMI.toFixed(1);
  //     if (BMI <= 18.5) {
  //       document.getElementById("info").innerHTML = "your skinny asf";
  //     } else if (BMI <= 24.9) {
  //       document.getElementById("info").innerHTML = "your pretty normal";
  //     } else if (BMI >= 25) {
  //       document.getElementById("info").innerHTML =
  //         "bruh u obese lose some weight fatty";
  //     }
  //   };

  const [bmi, setBMI] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleCalculateBMI = () => {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (isNaN(weight) || isNaN(height) || height === 0) {
      setBMI("Invalid input");
      setInfoMessage("");
      return;
    }

    let BMI = weight / height ** 2;
    setBMI(`Your BMI is: ${BMI.toFixed(1)}`);

    if (BMI <= 18.5) {
      setInfoMessage("You're skinny asf");
    } else if (BMI <= 24.9) {
      setInfoMessage("You're pretty normal");
    } else {
      setInfoMessage("Bruh, you're obese. Lose some weight, fatty!");
    }
  };

  return (
    <BMIWrapper>
      <h1>BMI Calculator</h1>
      <p>weight in kg</p>
      <input type="number" id="weight" placeholder="weight" />
      <p>hieght in meters</p>
      <input type="number" id="height" placeholder="height" />
      <button id="submitBmi" onClick={handleCalculateBMI}>Submit</button>
      <p id="hypotonuse">Your BMI is {bmi}</p>
      <p id="info">{infoMessage}</p>
    </BMIWrapper>
  );
}

export default BMI;
