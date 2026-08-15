import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatWeekday } from "../../helper/formatTime";

function DailyForecast() {
  const stylesDaily = figmaTailwing.daily; // Kısaltma için

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
  const dailyData = [
    {
      time: "2026-08-15",
      weatherCode: 3,
      temperatureMax: 22,
      temperatureMin: 18,
    },
    {
      time: "2026-08-16",
      weatherCode: 80,
      temperatureMax: 22,
      temperatureMin: 18,
    },
    {
      time: "2026-08-17",
      weatherCode: 95,
      temperatureMax: 22,
      temperatureMin: 12,
    },
    {
      time: "2026-08-17",
      weatherCode: 71,
      temperatureMax: 2,
      temperatureMin: -11,
    },
    {
      time: "2026-08-19",
      weatherCode: 51,
      temperatureMax: 21,
      temperatureMin: 14,
    },
    {
      time: "2026-08-20",
      weatherCode: 45,
      temperatureMax: 17,
      temperatureMin: 11,
    },
    {
      time: "2026-08-21",
      weatherCode: 0,
      temperatureMax: 32,
      temperatureMin: 28,
    },
  ];

  return (
    <section className={stylesDaily.section}>
      <h2 className={stylesDaily.title}>Daily forecast</h2>

      <ul className={stylesDaily.grid}>
        {dailyData.map((daily, index) => {
          return (
            <li key={index} className={stylesDaily.card}>
              <span className={stylesDaily.day}>{formatWeekday(daily.time)}</span>
              <img
                className={stylesDaily.icon}
                src={figmaAssets[weatherTypes[daily.weatherCode]]}
                alt={weatherTypes[daily.weatherCode]}
              />
              <div className={stylesDaily.range}>
                <span>{daily.temperatureMax}°</span>
                <span className={stylesDaily.low}>{daily.temperatureMin}°</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default DailyForecast;
