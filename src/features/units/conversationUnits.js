function convertTemperature(temperature, targetUnit) {
  const convertedTemperature =
    targetUnit === "fahrenheit" ? (temperature * 9) / 5 + 32 : temperature;

  return convertedTemperature;
}

function convertSpeed(speed, targetUnit) {
  const convertedSpeed = targetUnit === "mph" ? speed * 0.621371 : speed;

  return convertedSpeed;
}

function convertPrecipation(prep, targetUnit) {
  const convertedPrep = targetUnit === "inch" ? prep / 25.4 : prep;

  return convertedPrep;
}

export { convertTemperature, convertSpeed, convertPrecipation };
