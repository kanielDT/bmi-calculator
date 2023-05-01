
import { useState, useMemo } from 'react';
import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.css"

function App() {

  const [height, setHeight] = useState(1)
  const [weight, setWeight] = useState(1)

  function onWeightChange(e) {
    const inputWeight = e.target.value
    setWeight(inputWeight)
  }

  function onHeightChange(e) {
    const inputHeight = e.target.value
    setHeight(inputHeight)
  }

  const output = useMemo(() => {
    return ((weight / (height * height)) * 703).toFixed(2)
  }, [weight, height])


  return (
    <>
      <main>
        <h1>BMI Calculator</h1>
        <div className="imput-section">
          <p class="slider-output">Weight: {weight}</p>
          <input className="input-slider"
            type="range"
            onChange={onWeightChange}
            step="1"
            min="1"
            max="400"
          />
          <p className="input-slider">Height: {height}</p>
          <input
            type="range"
            onChange={onHeightChange}
            min="1"
            max="96" />
        </div>
        <div className="output-section">
          <p className="output">your BMI is {output}</p>
        </div>
      </main>
      <div><img src="https://www.wcrf-uk.org/wp-content/uploads/2021/06/WCRF-BMI-chart-WEB.png" /></div>
    </>
  );
}

export default App;
