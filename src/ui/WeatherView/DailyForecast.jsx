import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";

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
  ];

  return (
    <section className={stylesDaily.section}>
      <h2 className={stylesDaily.title}>Daily forecast</h2>

      <ul className={stylesDaily.grid}>
        {dailyData.map((daily, index) => {
          return (
            <li key={index} className={stylesDaily.card}>
              <span className={stylesDaily.day}>Tue</span>
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

function staticDate() {
  return (
    <>
      {" "}
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Tue</span>
        <img className={stylesDaily.icon} src={figmaAssets.rain} alt="Rain" />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Wed</span>
        <img
          className={stylesDaily.icon}
          src={figmaAssets.partlyCloudy}
          alt="Partly cloudy"
        />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Thu</span>
        <img className={stylesDaily.icon} src={figmaAssets.sunny} alt="Sunny" />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Fri</span>
        <img
          className={stylesDaily.icon}
          src={figmaAssets.partlyCloudy}
          alt="Partly cloudy"
        />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Sat</span>
        <img className={stylesDaily.icon} src={figmaAssets.storm} alt="Thunderstorms" />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Sun</span>
        <img className={stylesDaily.icon} src={figmaAssets.overcast} alt="Overcast" />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
      <li className={stylesDaily.card}>
        <span className={stylesDaily.day}>Mon</span>
        <img className={stylesDaily.icon} src={figmaAssets.fog} alt="Fog" />
        <div className={stylesDaily.range}>
          <span>X°</span>
          <span className={stylesDaily.low}>Y°</span>
        </div>
      </li>
    </>
  );
}
export default DailyForecast;
