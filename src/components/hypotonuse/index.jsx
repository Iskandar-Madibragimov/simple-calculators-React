import React, { Component, useState } from "react";
import { HypotonuseWrapper } from "./style";

function Hypotonuse() {

    const [hypotonuse, setHypotonuse] = useState()

    function calculateHypotenuse() {
        let sideA = document.getElementById("sideA").value;
        let sideB = document.getElementById("sideB").value;
      
        setHypotonuse(sideA ** 2 + sideB ** 2);
      
        if (!isNaN(hypotonuse)) {
          document.getElementById("hypotonuse").innerHTML =
            Math.sqrt(hypotonuse).toFixed(2);
        }
      }
    
  return (
    <HypotonuseWrapper>
      <h1>Hypotenuse Calculator</h1>
      <p>Side A</p>
      <input type="number" id="sideA" placeholder="A" />
      <p>Side B</p>
      <input type="number" id="sideB" placeholder="B" />
      <button onClick={calculateHypotenuse} id="submitHypotonuse">
        Submit
      </button>
      <p id="hypotonuse">The hypotonuse is {hypotonuse}</p>
    </HypotonuseWrapper>
  );
}

export default Hypotonuse;
