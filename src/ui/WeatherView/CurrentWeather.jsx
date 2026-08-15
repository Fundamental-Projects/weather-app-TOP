import figmaTailwing, {
  figmaAssets,
  figmaInlineStyles,
} from "../../styles/figmaStlyes/figmaTailwing";
import { formatFullDate } from "../../helper/formatTime";
import { convertTemperature } from "../../features/units/conversationUnits";

function CurrentWeather({ weatherTypes, currentData, units }) {
  const stylesWeather = figmaTailwing.weather; // Kısaltma için
  const convertedTemperature = convertTemperature(
    currentData.temperature,
    units.temperature,
  );

  const location = {
    city: "Adana",
    country: "Republic of Turkiye",
  };
  return (
    <section className={stylesWeather.todayCard} style={figmaInlineStyles.todayCard}>
      <div className={stylesWeather.location}>
        <h2 className={stylesWeather.locationName}>
          {location.city}, {location.country}
        </h2>
        <time className={stylesWeather.date} dateTime={currentData.time}>
          {formatFullDate(currentData.time)}
        </time>
      </div>

      <div className={stylesWeather.temperature}>
        <img
          className={stylesWeather.temperatureIcon}
          src={figmaAssets[weatherTypes[currentData.weatherCode]]}
          alt={weatherTypes[currentData.weatherCode]}
        />
        <p className={stylesWeather.temperatureValue}>
          {convertedTemperature.toFixed(0)}°
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
