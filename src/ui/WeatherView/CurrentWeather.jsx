import figmaTailwing, {
  figmaAssets,
  figmaInlineStyles,
} from "../../styles/figmaStlyes/figmaTailwing";

function CurrentWeather() {
  return (
    <section
      className={figmaTailwing.weather.todayCard}
      style={figmaInlineStyles.todayCard}
    >
      <div className={figmaTailwing.weather.location}>
        <h2 className={figmaTailwing.weather.locationName}>Berlin, Germany</h2>
        <time className={figmaTailwing.weather.date} dateTime="2026-08-05">
          Tuesday, Aug, 2026
        </time>
      </div>

      <div className={figmaTailwing.weather.temperature}>
        <img
          className={figmaTailwing.weather.temperatureIcon}
          src={figmaAssets.sunny}
          alt="Sunny"
        />
        <p className={figmaTailwing.weather.temperatureValue}>20°</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
