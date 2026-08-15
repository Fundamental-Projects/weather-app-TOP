import figmaTailwing, {
  figmaAssets,
  figmaInlineStyles,
} from "../../styles/figmaStlyes/figmaTailwing";

function CurrentWeather() {
  const stylesWeather = figmaTailwing.weather; // Kısaltma için
  return (
    <section className={stylesWeather.todayCard} style={figmaInlineStyles.todayCard}>
      <div className={stylesWeather.location}>
        <h2 className={stylesWeather.locationName}>Berlin, Germany</h2>
        <time className={stylesWeather.date} dateTime="2026-08-05">
          Tuesday, Aug 5, 2026
        </time>
      </div>

      <div className={stylesWeather.temperature}>
        <img
          className={stylesWeather.temperatureIcon}
          src={figmaAssets.sunny}
          alt="Sunny"
        />
        <p className={stylesWeather.temperatureValue}>20°</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
