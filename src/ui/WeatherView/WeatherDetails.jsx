import figmaTailwing from "../../styles/figmaStlyes/figmaTailwing";

function WeatherDetails() {
  return (
    <section className={figmaTailwing.weather.detailGrid}>
      <article className={figmaTailwing.weather.detailCard}>
        <span className={figmaTailwing.weather.detailLabel}>Feels Like</span>
        <span className={figmaTailwing.weather.detailValue}>X°</span>
      </article>

      <article className={figmaTailwing.weather.detailCard}>
        <span className={figmaTailwing.weather.detailLabel}>Humidity</span>
        <span className={figmaTailwing.weather.detailValue}>X%</span>
      </article>

      <article className={figmaTailwing.weather.detailCard}>
        <span className={figmaTailwing.weather.detailLabel}>Wind</span>
        <span className={figmaTailwing.weather.detailValue}>X km/h</span>
      </article>

      <article className={figmaTailwing.weather.detailCard}>
        <span className={figmaTailwing.weather.detailLabel}>Precipitation</span>
        <span className={figmaTailwing.weather.detailValue}>X mm</span>
      </article>
    </section>
  );
}

export default WeatherDetails;
