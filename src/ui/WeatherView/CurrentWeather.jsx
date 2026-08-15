import figmaTailwing, {
  figmaAssets,
  figmaInlineStyles,
} from "../../styles/figmaStlyes/figmaTailwing";
import { formatFullDate } from "../../helper/formatTime";

function CurrentWeather() {
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
  const weatherTypes = {
    0: "sunny",

    1: "partlyCloudy",
    2: "partlyCloudy",

    3: "overcast",

    45: "fog",
    48: "fog",

    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    56: "drizzle",
    57: "drizzle",

    61: "rain",
    63: "rain",
    65: "rain",
    66: "rain",
    67: "rain",
    80: "rain",
    81: "rain",
    82: "rain",

    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    85: "snow",
    86: "snow",

    95: "storm",
    96: "storm",
    99: "storm",
  };

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
          {currentData.temperature.toFixed(0)}°
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
