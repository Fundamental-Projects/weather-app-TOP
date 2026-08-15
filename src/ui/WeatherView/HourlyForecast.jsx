import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatHour } from "../../helper/formatTime";

function HourlyForecast({ weatherTypes, hourlyData }) {
  const stylesHourly = figmaTailwing.hourly; // Kısaltma için

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
                alt={weatherTypes[hour.weatherCode]}
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
