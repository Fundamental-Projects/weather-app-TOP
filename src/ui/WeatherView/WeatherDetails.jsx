import {
  convertPrecipation,
  convertSpeed,
  convertTemperature,
} from "../../features/units/conversationUnits";
import figmaTailwing from "../../styles/figmaStlyes/figmaTailwing";

function WeatherDetails({ currentData, units, isPending }) {
  const stylesWeather = figmaTailwing.weather; // Kısaltma için

  return (
    <dl className={stylesWeather.detailGrid}>
      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Feels Like</dt>
        <dd className={stylesWeather.detailValue}>
          {isPending
            ? "-"
            : `${convertTemperature(
                currentData.apparentTemperature,
                units.temperature,
              ).toFixed(0)}°`}
        </dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Humidity</dt>
        <dd className={stylesWeather.detailValue}>
          {isPending ? "-" : `${currentData.humidity}%`}
        </dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Wind</dt>
        <dd className={stylesWeather.detailValue}>
          {isPending
            ? "-"
            : `${convertSpeed(currentData.windSpeed, units.windSpeed).toFixed(0)}
          ${units.windSpeed}`}
        </dd>
      </div>

      <div className={stylesWeather.detailCard}>
        <dt className={stylesWeather.detailLabel}>Precipitation</dt>
        <dd className={stylesWeather.detailValue}>
          {isPending
            ? "-"
            : `${convertPrecipation(currentData.precipitation, units.precipitation).toFixed(0)}
          ${units.precipitation}`}
        </dd>
      </div>
    </dl>
  );
}

export default WeatherDetails;
