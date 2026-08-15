import figmaTailwing from "../styles/figmaStlyes/figmaTailwing";
import CurrentWeather from "./WeatherView/CurrentWeather";
import DailyForecast from "./WeatherView/DailyForecast";
import HourlyForecast from "./WeatherView/HourlyForecast";
import WeatherDetails from "./WeatherView/WeatherDetails";

function WeatherView({ units, weatherTypes, currentData, dailyData, hourlyData, query }) {
  return (
    <div className={figmaTailwing.layout.content}>
      <div className={figmaTailwing.layout.leftColumn}>
        <CurrentWeather
          units={units}
          currentData={currentData}
          weatherTypes={weatherTypes}
          query={query}
        />
        <WeatherDetails units={units} currentData={currentData} query={query} />
        <DailyForecast
          units={units}
          weatherTypes={weatherTypes}
          dailyData={dailyData}
          query={query}
        />
      </div>
      <div className={figmaTailwing.layout.rightColumn}>
        <HourlyForecast
          units={units}
          weatherTypes={weatherTypes}
          hourlyData={hourlyData}
          dailyData={dailyData}
          query={query}
        />
      </div>
    </div>
  );
}

export default WeatherView;
