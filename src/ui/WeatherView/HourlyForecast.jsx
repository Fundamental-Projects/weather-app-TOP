import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";

function HourlyForecast() {
  const figmaHourly = figmaTailwing.hourly; // Kısaltma için
  return (
    <section className={figmaHourly.panel}>
      <div className={figmaHourly.header}>
        <h2 className={figmaHourly.title}>Hourly forecast</h2>
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
      <ul className={figmaHourly.rows}>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.overcast} alt="Overcast" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img
            className={figmaHourly.icon}
            src={figmaAssets.partlyCloudy}
            alt="Partly cloudy"
          />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.sunny} alt="Sunny" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.overcast} alt="Overcast" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.drizzle} alt="Drizzle" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.fog} alt="Fog" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.rain} alt="Rain" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
        <li className={figmaHourly.row}>
          <img className={figmaHourly.icon} src={figmaAssets.overcast} alt="Overcast" />
          <span className={figmaHourly.time}>X PM</span>
          <span className={figmaHourly.temperature}>y°</span>
        </li>
      </ul>
      <div className={figmaHourly.scrollbar} aria-hidden="true" />
    </section>
  );
}

export default HourlyForecast;
