import figmaTailwing from "../styles/figmaStlyes/figmaTailwing";
import CurrentWeather from "./WeatherView/CurrentWeather";
import DailyForecast from "./WeatherView/DailyForecast";
import HourlyForecast from "./WeatherView/HourlyForecast";
import WeatherDetails from "./WeatherView/WeatherDetails";

function WeatherView({
  units,
  weatherTypes,
  currentData,
  dailyData,
  hourlyData,
  isPending,
  isLoading,
  location,
}) {
  return (
    <div className={figmaTailwing.layout.content}>
      <div className={figmaTailwing.layout.leftColumn}>
        <CurrentWeather
          units={units}
          currentData={currentData}
          weatherTypes={weatherTypes}
          isPending={isPending}
          isLoading={isLoading}
          location={location}
        />
        <WeatherDetails units={units} currentData={currentData} isPending={isPending} />
        <DailyForecast
          units={units}
          weatherTypes={weatherTypes}
          dailyData={dailyData}
          isPending={isPending}
        />
      </div>
      <div className={figmaTailwing.layout.rightColumn}>
        <HourlyForecast
          units={units}
          weatherTypes={weatherTypes}
          hourlyData={hourlyData}
          dailyData={dailyData}
          isPending={isPending}
        />
      </div>
    </div>
  );
}

export default WeatherView;
