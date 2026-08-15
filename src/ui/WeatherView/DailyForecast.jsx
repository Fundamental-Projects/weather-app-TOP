import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatWeekday } from "../../helper/formatTime";

function DailyForecast({ weatherTypes, dailyData }) {
  const stylesDaily = figmaTailwing.daily; // Kısaltma için

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
