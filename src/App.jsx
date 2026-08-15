import { useReducer, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { initialUnits, unitsReducer } from "./features/units/unitsReducer";

import { fetchWeatherByLocation } from "./services/fetchData";

import figmaTailwing from "./styles/figmaStlyes/figmaTailwing";
import Header from "./ui/Header";
import SearchForm from "./ui/SearchForm";
import UnitToggle from "./ui/UnitToggle";
import WeatherView from "./ui/WeatherView";

function App() {
  const [units, dispatch] = useReducer(unitsReducer, initialUnits);
  const [searchTerm, setSearchTerm] = useState("");
  const query = useQuery({
    queryKey: ["weather", searchTerm],
    queryFn: () => fetchWeatherByLocation(searchTerm),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
    enabled: Boolean(searchTerm.trim()),
  });

  const currentData = query.isPending ? null : query.data?.current;
  const dailyData = query.isPending ? [] : (query.data?.daily ?? []);
  const hourlyData = query.isPending ? [] : (query.data?.hourly ?? []);
  // console.log(currentData);

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

  return (
    <>
      <div className={figmaTailwing.layout.page}>
        <div className={figmaTailwing.layout.canvas}>
          <Header>
            <UnitToggle units={units} dispatch={dispatch} />
          </Header>
          <main className={figmaTailwing.layout.main}>
            <h1 className={figmaTailwing.layout.title}>How's the sky looking today?</h1>
            <SearchForm searchTerm={searchTerm} onSearch={setSearchTerm} />
            <WeatherView
              units={units}
              currentData={currentData}
              weatherTypes={weatherTypes}
              dailyData={dailyData}
              hourlyData={hourlyData}
              query={query}
            />
            {/* <div className={figmaTailwing.layout.content}>
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
              </div> */}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
