import figmaTailwing from "../../styles/figmaStlyes/figmaTailwing";

function WeatherDetails() {
  const stylesWeather = figmaTailwing.weather; // Kısaltma için

  const currentData = {
    apparentTemperature: 36,
    humidity: 51,
    precipitation: 0,
    temperature: 33.6,
    time: "2026-08-15T17:45",
    weatherCode: 2,
    windSpeed: 17.6,
  };
  return (
    <dl className={stylesWeather.detailGrid}>
      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Feels Like</dt>
        <dd className={stylesWeather.detailValue}>{currentData.apparentTemperature}°</dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Humidity</dt>
        <dd className={stylesWeather.detailValue}>{currentData.humidity}%</dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Wind</dt>
        <dd className={stylesWeather.detailValue}>{currentData.windSpeed} km/h</dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Precipitation</dt>
        <dd className={stylesWeather.detailValue}>{currentData.precipitation} mm</dd>
      </div>
    </dl>
  );
}

export default WeatherDetails;
