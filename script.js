const degreeType = document.querySelector(".inputValue");
const unitType = document.querySelector("#unitValue");
const resultType = document.querySelector(".Result");
const formula = document.querySelector(".formula");
degreeType.addEventListener("input", function (e) {
  const degreeValue = e.target.value;

  unitType.addEventListener("input", function (event) {
    const unitValue = event.target.value;

    if (unitValue == "K") {
      const kelvin = Number(degreeValue) + 273.15;
      resultType.textContent =  `${kelvin}K`;
      formula.textContent = `(${degreeValue}°) + 273.15 = ${kelvin}K`; 
    }
    if(unitValue == "F"){
        const Fahrenheit = (Number (degreeValue) * 9/5) + 32;
        resultType.textContent = `${Fahrenheit}°F`;
        formula.textContent = `(${degreeValue}°) * 9/5) + 32 = ${Fahrenheit}°F`;
    }
    if(unitValue == "C"){
      document.querySelector(".degree").textContent = "Fahrenheit"
      const Celsius = (degreeValue - 32) * 5/9;
       resultType.textContent = `${Celsius.toFixed(2)}°C`;
       formula.textContent = `(${degreeValue}°) - 32) * 5/9 = ${Celsius.toFixed(3)}°C`;
    }
  });
});
