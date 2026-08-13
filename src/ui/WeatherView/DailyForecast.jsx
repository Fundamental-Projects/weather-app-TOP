import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";

function DailyForecast() {
  return (
    <section className={figmaTailwing.daily.section}>
      <h3 className={figmaTailwing.daily.title}>Daily forecast</h3>

      <div className={figmaTailwing.daily.grid}>
        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Tue</span>
          <img className={figmaTailwing.daily.icon} src={figmaAssets.rain} alt="Rain" />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Wed</span>
          <img
            className={figmaTailwing.daily.icon}
            src={figmaAssets.partlyCloudy}
            alt="Partly cloudy"
          />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Thu</span>
          <img className={figmaTailwing.daily.icon} src={figmaAssets.sunny} alt="Sunny" />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Fri</span>
          <img
            className={figmaTailwing.daily.icon}
            src={figmaAssets.partlyCloudy}
            alt="Partly cloudy"
          />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Sat</span>
          <img
            className={figmaTailwing.daily.icon}
            src={figmaAssets.storm}
            alt="Thunderstorms"
          />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Sun</span>
          <img
            className={figmaTailwing.daily.icon}
            src={figmaAssets.overcast}
            alt="Overcast"
          />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>

        <article className={figmaTailwing.daily.card}>
          <span className={figmaTailwing.daily.day}>Mon</span>
          <img className={figmaTailwing.daily.icon} src={figmaAssets.fog} alt="Fog" />
          <div className={figmaTailwing.daily.range}>
            <span>X°</span>
            <span className={figmaTailwing.daily.low}>Y°</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default DailyForecast;
