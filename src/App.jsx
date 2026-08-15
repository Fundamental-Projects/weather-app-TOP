import figmaTailwing from "./styles/figmaStlyes/figmaTailwing";
import Header from "./ui/Header";
import SearchForm from "./ui/SearchForm";
import CurrentWeather from "./ui/WeatherView/CurrentWeather";
import DailyForecast from "./ui/WeatherView/DailyForecast";
import HourlyForecast from "./ui/WeatherView/HourlyForecast";
import WeatherDetails from "./ui/WeatherView/WeatherDetails";
import { fetchWeatherByLocation } from "./services/fetchData";
import { useReducer, useState } from "react";
import UnitToggle from "./ui/UnitToggle";
import { initialUnits, unitsReducer } from "./features/units/unitsReducer";

function reducer(state, action) {}

function App() {
  const [units, dispatch] = useReducer(unitsReducer, initialUnits);
  const [searchTerm, setSearchTerm] = useState("");

  const weatherTypes = {
    0: "sunny",

    1: "partlyCloudy",
    2: "partlyCloudy",

    3: "overcast",

    45: "fog",
    48: "fog",

    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    56: "drizzle",
    57: "drizzle",

    61: "rain",
    63: "rain",
    65: "rain",
    66: "rain",
    67: "rain",
    80: "rain",
    81: "rain",
    82: "rain",

    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    85: "snow",
    86: "snow",

    95: "storm",
    96: "storm",
    99: "storm",
  };

  const currentData = {
    apparentTemperature: 36,
    humidity: 51,
    precipitation: 0,
    temperature: 33.6,
    time: "2026-08-15T17:45",
    weatherCode: 2,
    windSpeed: 17.6,
  };

  const dailyData = [
    {
      time: "2026-08-15",
      weatherCode: 3,
      temperatureMax: 22,
      temperatureMin: 18,
    },
    {
      time: "2026-08-16",
      weatherCode: 80,
      temperatureMax: 22,
      temperatureMin: 18,
    },
    {
      time: "2026-08-17",
      weatherCode: 95,
      temperatureMax: 22,
      temperatureMin: 12,
    },
    {
      time: "2026-08-18",
      weatherCode: 71,
      temperatureMax: 2,
      temperatureMin: -11,
    },
    {
      time: "2026-08-19",
      weatherCode: 51,
      temperatureMax: 21,
      temperatureMin: 14,
    },
    {
      time: "2026-08-20",
      weatherCode: 45,
      temperatureMax: 17,
      temperatureMin: 11,
    },
    {
      time: "2026-08-21",
      weatherCode: 0,
      temperatureMax: 32,
      temperatureMin: 28,
    },
  ];

  const hourlyData = [
    {
      time: "2026-08-15T00:00",
      weatherCode: 3,
      temperature: 22,
    },
    {
      time: "2026-08-15T01:00",
      weatherCode: 2,
      temperature: 21,
    },
    {
      time: "2026-08-15T02:00",
      weatherCode: 1,
      temperature: 20,
    },
    {
      time: "2026-08-15T03:00",
      weatherCode: 3,
      temperature: 19,
    },
    {
      time: "2026-08-15T04:00",
      weatherCode: 61,
      temperature: 18,
    },
    {
      time: "2026-08-15T05:00",
      weatherCode: 53,
      temperature: 17,
    },
    {
      time: "2026-08-15T06:00",
      weatherCode: 45,
      temperature: 16,
    },
    {
      time: "2026-08-15T07:00",
      weatherCode: 80,
      temperature: 15,
    },
  ];

  return (
    <div className={figmaTailwing.layout.page}>
      <div className={figmaTailwing.layout.canvas}>
        <Header>
          <UnitToggle units={units} dispatch={dispatch} />
        </Header>
        <main className={figmaTailwing.layout.main}>
          <h1 className={figmaTailwing.layout.title}>How's the sky looking today?</h1>
          <SearchForm />
          <div className={figmaTailwing.layout.content}>
            <div className={figmaTailwing.layout.leftColumn}>
              <CurrentWeather
                units={units}
                currentData={currentData}
                weatherTypes={weatherTypes}
              />
              <WeatherDetails units={units} currentData={currentData} />
              <DailyForecast
                units={units}
                weatherTypes={weatherTypes}
                dailyData={dailyData}
              />
            </div>
            <div className={figmaTailwing.layout.rightColumn}>
              <HourlyForecast
                units={units}
                weatherTypes={weatherTypes}
                hourlyData={hourlyData}
                dailyData={dailyData}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
