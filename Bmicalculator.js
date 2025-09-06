import React, { useState } from 'react';
import './Bmicalculator.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [healthRisk, setHealthRisk] = useState('');

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (w > 0 && h > 0) {
      const bmiValue = calculateBMI(w, h);
      setBMI(bmiValue);
      const { classification, risk } = getBMIDetails(bmiValue);
      setCategory(classification);
      setHealthRisk(risk);
    }
  };

  function calculateBMI(weight, heightCm) {
    const heightM = heightCm / 100;
    return Math.round((weight / (heightM * heightM)) * 100) / 100;
  }

  function getBMIDetails(bmi) {
    if (bmi < 18.5) return { classification: "Underweight", risk: "Minimal" };
    else if (bmi >= 18.5 && bmi <= 24.9) return { classification: "Normal", risk: "Minimal" };
    else if (bmi >= 25 && bmi <= 29.9) return { classification: "Overweight", risk: "Increased" };
    else if (bmi >= 30 && bmi <= 34.9) return { classification: "Obese", risk: "High" };
    else if (bmi >= 35 && bmi <= 39.9) return { classification: "Severely Obese", risk: "Very High" };
    else return { classification: "Morbidly Obese", risk: "Extremely High" };
  }

  return (
    
    <div>
      <h1>BMI CALCULATOR</h1>
      <input 
        type="number" 
        placeholder="Enter your Weight (kg)" 
        value={weight} 
        onChange={e => setWeight(e.target.value)} 
      /><br></br>
      <input 
        type="number" 
        placeholder="Enter your Height (cm)" 
        value={height} 
        onChange={e => setHeight(e.target.value)} 
      /> <br></br>
      <button onClick={handleCalculate}>Calculate BMI</button>
      
      {bmi !== null && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>Classification: {category}</p>
          <p>Health Risk: {healthRisk}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
