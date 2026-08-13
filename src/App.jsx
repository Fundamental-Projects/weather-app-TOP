import figmaTailwing from "./styles/figmaStlyes/figmaTailwing";
import Header from "./ui/Header";
import SearchForm from "./ui/SearchForm";
import CurrentWeather from "./ui/WeatherView/CurrentWeather";
import DailyForecast from "./ui/WeatherView/DailyForecast";
import HourlyForecast from "./ui/WeatherView/HourlyForecast";
import WeatherDetails from "./ui/WeatherView/WeatherDetails";

function App() {
  return (
    <div className={figmaTailwing.layout.page}>
      <div className={figmaTailwing.layout.canvas}>
        <Header />
        <main className={figmaTailwing.layout.main}>
          <h1 className={figmaTailwing.layout.title}>How's the sky looking today?</h1>
          <SearchForm />
          <div className={figmaTailwing.layout.content}>
            <div className={figmaTailwing.layout.leftColumn}>
              <CurrentWeather />
              <WeatherDetails />
              <DailyForecast />
            </div>
            <div className={figmaTailwing.layout.rightColumn}>
              <HourlyForecast />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
