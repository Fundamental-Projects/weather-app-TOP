import figmaTailwing, {
  figmaAssets,
  figmaInlineStyles,
} from "../../styles/figmaStlyes/figmaTailwing";
import { formatFullDate } from "../../helper/formatTime";
import { convertTemperature } from "../../features/units/conversationUnits";
import Spinner from "../Spinner";

function CurrentWeather({
  weatherTypes,
  currentData,
  units,
  isPending,
  isLoading,
  location,
}) {
  const stylesWeather = figmaTailwing.weather; // Kısaltma için

  if (isLoading) return <Spinner />;

  return (
    <section className={stylesWeather.todayCard} style={figmaInlineStyles.todayCard}>
      <div className={stylesWeather.location}>
        <h2 className={stylesWeather.locationName}>
          {isPending ? "" : `${location.city}, ${location.country}`}
        </h2>
        <time className={stylesWeather.date} dateTime={isPending ? "" : currentData.time}>
          {isPending ? "" : formatFullDate(currentData.time)}
        </time>
      </div>

      <div className={stylesWeather.temperature}>
        <img
          className={stylesWeather.temperatureIcon}
          src={
            isPending
              ? figmaAssets[weatherTypes[0]]
              : figmaAssets[weatherTypes[currentData.weatherCode]]
          }
          alt={isPending ? "" : weatherTypes[currentData.weatherCode]}
        />
        <p className={stylesWeather.temperatureValue}>
          {isPending
            ? ""
            : `${convertTemperature(currentData.temperature, units.temperature).toFixed(0)}°`}
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
