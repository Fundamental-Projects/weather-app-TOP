import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatHour } from "../../helper/formatTime";

function HourlyForecast() {
  const stylesHourly = figmaTailwing.hourly; // Kısaltma için

  const hourlyData = [
    {
      time: "2026-08-15T00:00",
      weatherCode: 3,
      temperature: 22,
    },
    {
      time: "2026-08-15T01:00",
      weatherCode: 2,
      temperature: 21,
    },
    {
      time: "2026-08-15T02:00",
      weatherCode: 1,
      temperature: 20,
    },
    {
      time: "2026-08-15T03:00",
      weatherCode: 3,
      temperature: 19,
    },
    {
      time: "2026-08-15T04:00",
      weatherCode: 61,
      temperature: 18,
    },
    {
      time: "2026-08-15T05:00",
      weatherCode: 53,
      temperature: 17,
    },
    {
      time: "2026-08-15T06:00",
      weatherCode: 45,
      temperature: 16,
    },
    {
      time: "2026-08-15T07:00",
      weatherCode: 80,
      temperature: 15,
    },
  ];
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

  return (
    <section className={stylesHourly.panel}>
      <div className={stylesHourly.header}>
        <h2 className={stylesHourly.title}>Hourly forecast</h2>
        <button className={figmaTailwing.controls.dayButton} type="button">
          <span>Tuesday</span>
          <img
            className={figmaTailwing.controls.chevron}
            src={figmaAssets.dropdown}
            alt=""
          />
        </button>
        {/* Dropdown menu eklenecek */}
      </div>
      <ul className={stylesHourly.rows}>
        {hourlyData.map((hour, index) => {
          return (
            <li key={index} className={stylesHourly.row}>
              <img
                className={stylesHourly.icon}
                src={figmaAssets[weatherTypes[hour.weatherCode]]}
              />
              <time dateTime={hour.time} className={stylesHourly.time}>
                {formatHour(hour.time)}
              </time>
              <span className={stylesHourly.temperature}>{hour.temperature}°</span>
            </li>
          );
        })}
      </ul>
      <div className={stylesHourly.scrollbar} aria-hidden="true" />
    </section>
  );
}

// function staticData() {
//        <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.overcast} alt="Overcast" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img
//             className={stylesHourly.icon}
//             src={figmaAssets.partlyCloudy}
//             alt="Partly cloudy"
//           />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.sunny} alt="Sunny" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.overcast} alt="Overcast" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.drizzle} alt="Drizzle" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.fog} alt="Fog" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.rain} alt="Rain" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>
//         <li className={stylesHourly.row}>
//           <img className={stylesHourly.icon} src={figmaAssets.overcast} alt="Overcast" />
//           <span className={stylesHourly.time}>X PM</span>
//           <span className={stylesHourly.temperature}>y°</span>
//         </li>

// }
export default HourlyForecast;
