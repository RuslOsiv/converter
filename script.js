function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const celsiusRadio = document.getElementById('celsiusRadio').checked;
    const fahrenheitRadio = document.getElementById('fahrenheitRadio').checked;

    if (isNaN(temperatureInput)) {
        document.getElementById('result').textContent = "Invalid input. Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    if (celsiusRadio) {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        document.getElementById('result').textContent = `Fahrenheit: ${convertedTemperature.toFixed(2)}°F`;
    } else if (fahrenheitRadio) {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        document.getElementById('result').textContent = `Celsius: ${convertedTemperature.toFixed(2)}°C`;
    }
}

