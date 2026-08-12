import { formStyles } from "./styles/defaults/formStyles";
import { fetchGeoData, fetchWeatherData } from "./services/fetchData";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className={formStyles.container} onSubmit={handleSubmit}>
      <label className={formStyles.label} htmlFor="input">
        Sehrinizi giriniz
      </label>
      <input className={formStyles.input} type="text" />
      <button className={formStyles.button}>Submit</button>
    </form>
  );
}

export default App;
