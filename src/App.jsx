import { formStyles } from "./styles/defaults/formStyles";
import { fetchWeatherByLocation } from "./services/fetchData";
import figmaTailwing from "./styles/figmaStlyes/figmaTailwing";
import Header from "./ui/Header";

function App() {
  return (
    <div className={figmaTailwing.layout.page}>
      <div className={figmaTailwing.layout.canvas}>
        <Header />
        <main>
          <h1 className={figmaTailwing.layout.title}>How's the sky looking today?</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
