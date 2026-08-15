import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";

function DailyForecast() {
  const stylesDaily = figmaTailwing.daily; // Kısaltma için
  return (
    <section className={stylesDaily.section}>
      <h2 className={stylesDaily.title}>Daily forecast</h2>

      <ul className={stylesDaily.grid}>
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
      </ul>
    </section>
  );
}

export default DailyForecast;
