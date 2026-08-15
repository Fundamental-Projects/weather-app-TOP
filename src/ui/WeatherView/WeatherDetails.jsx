import figmaTailwing from "../../styles/figmaStlyes/figmaTailwing";

function WeatherDetails() {
  const figmaWeather = figmaTailwing.weather; // Kısaltma için
  return (
    <section className={figmaWeather.detailGrid}>
      <article className={figmaWeather.detailCard}>
        <span className={figmaWeather.detailLabel}>Feels Like</span>
        <span className={figmaWeather.detailValue}>X°</span>
      </article>

      <article className={figmaWeather.detailCard}>
        <span className={figmaWeather.detailLabel}>Humidity</span>
        <span className={figmaWeather.detailValue}>X%</span>
      </article>

      <article className={figmaWeather.detailCard}>
        <span className={figmaWeather.detailLabel}>Wind</span>
        <span className={figmaWeather.detailValue}>X km/h</span>
      </article>

      <article className={figmaTailwing.weather.detailCard}>
        <span className={figmaTailwing.weather.detailLabel}>Precipitation</span>
        <span className={figmaTailwing.weather.detailValue}>X mm</span>
      </article>
    </section>
  );
}

export default WeatherDetails;
