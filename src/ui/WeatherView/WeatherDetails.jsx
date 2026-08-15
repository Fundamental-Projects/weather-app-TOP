import figmaTailwing from "../../styles/figmaStlyes/figmaTailwing";

function WeatherDetails() {
  const stylesWeather = figmaTailwing.weather; // Kısaltma için
  return (
    <dl className={stylesWeather.detailGrid}>
      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Feels Like</dt>
        <dd className={stylesWeather.detailValue}>X°</dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Humidity</dt>
        <dd className={stylesWeather.detailValue}>X%</dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Wind</dt>
        <dd className={stylesWeather.detailValue}>X km/h</dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Precipitation</dt>
        <dd className={stylesWeather.detailValue}>X mm</dd>
      </div>
    </dl>
  );
}

export default WeatherDetails;
