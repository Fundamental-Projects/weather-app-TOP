import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";

function DailyForecast() {
  const figmaDaily = figmaTailwing.daily; // Kısaltma için
  return (
    <section className={figmaDaily.section}>
      <h2 className={figmaDaily.title}>Daily forecast</h2>

      <div className={figmaDaily.grid}>
        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Tue</span>
          <img className={figmaDaily.icon} src={figmaAssets.rain} alt="Rain" />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Wed</span>
          <img
            className={figmaDaily.icon}
            src={figmaAssets.partlyCloudy}
            alt="Partly cloudy"
          />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Thu</span>
          <img className={figmaDaily.icon} src={figmaAssets.sunny} alt="Sunny" />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Fri</span>
          <img
            className={figmaDaily.icon}
            src={figmaAssets.partlyCloudy}
            alt="Partly cloudy"
          />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Sat</span>
          <img className={figmaDaily.icon} src={figmaAssets.storm} alt="Thunderstorms" />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Sun</span>
          <img className={figmaDaily.icon} src={figmaAssets.overcast} alt="Overcast" />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaDaily.card}>
          <span className={figmaDaily.day}>Mon</span>
          <img className={figmaDaily.icon} src={figmaAssets.fog} alt="Fog" />
          <div className={figmaDaily.range}>
            <span>X°</span>
            <span className={figmaDaily.low}>Y°</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DailyForecast;
