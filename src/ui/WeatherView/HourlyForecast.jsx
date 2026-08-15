import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";

function HourlyForecast() {
  return (
    <section className={figmaTailwing.hourly.panel}>
      <div className={figmaTailwing.hourly.header}>
        <h2 className={figmaTailwing.hourly.title}>Hourly forecast</h2>
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
      <ul className={figmaTailwing.hourly.rows}>
        <li className={figmaTailwing.hourly.row}>
          <img
            className={figmaTailwing.hourly.icon}
            src={figmaAssets.overcast}
            alt="Overcast"
          />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img
            className={figmaTailwing.hourly.icon}
            src={figmaAssets.partlyCloudy}
            alt="Partly cloudy"
          />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img
            className={figmaTailwing.hourly.icon}
            src={figmaAssets.sunny}
            alt="Sunny"
          />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img
            className={figmaTailwing.hourly.icon}
            src={figmaAssets.overcast}
            alt="Overcast"
          />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img
            className={figmaTailwing.hourly.icon}
            src={figmaAssets.drizzle}
            alt="Drizzle"
          />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img className={figmaTailwing.hourly.icon} src={figmaAssets.fog} alt="Fog" />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img className={figmaTailwing.hourly.icon} src={figmaAssets.rain} alt="Rain" />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
        <li className={figmaTailwing.hourly.row}>
          <img
            className={figmaTailwing.hourly.icon}
            src={figmaAssets.overcast}
            alt="Overcast"
          />
          <span className={figmaTailwing.hourly.time}>X PM</span>
          <span className={figmaTailwing.hourly.temperature}>y°</span>
        </li>
      </ul>
      <div className={figmaTailwing.hourly.scrollbar} aria-hidden="true" />
    </section>
  );
}

export default HourlyForecast;
