const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1/forecast";

async function fetchGeoData(searchTerm) {
  try {
    if (!searchTerm.trim()) {
      console.log("No search term provided. Skipping fetch.");
      throw new Error("No search term provided Skipping fetch");
    }

    const url = new URL(BASE_URL);

    url.searchParams.set("name", searchTerm);
    url.searchParams.set("count", "10");
    url.searchParams.set("language", "en");
    url.searchParams.set("format", "json");

    const requestUrl = new Request(url, {
      method: "GET",
    });

    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const result = data.results?.[0];
    if (!result) {
      throw new Error("Location not found");
    }

    return result;
  } catch (error) {
    console.error("Error fetching geo data:", error);
    throw error;
  }
}

async function fetchWeatherData(latitude, longitude) {
  try {
    const url = new URL(WEATHER_BASE_URL);

    url.searchParams.set("latitude", latitude);
    url.searchParams.set("longitude", longitude);
    url.searchParams.set(
      "current",
      "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    );
    url.searchParams.set(
      "daily",
      "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,snowfall_sum,wind_speed_10m_max",
    );
    url.searchParams.set("hourly", "temperature_2m,weather_code");
    url.searchParams.set("timezone", "auto");

    const requestUrl = new Request(url, {
      method: "GET",
    });

    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

async function fetchWeatherByLocation(searchTerm) {
  const {
    latitude,
    longitude,
    name: city,
    country,
    timezone,
  } = await fetchGeoData(searchTerm);
  const location = { city, country, timezone };
  const weather = await fetchWeatherData(latitude, longitude);
  const result = { location, weather };

  console.log(location);
  console.log(weather);

  return processWeatherData(result);
}

function processWeatherData({ location, weather }) {
  const {
    current: {
      time,
      apparent_temperature: apparentTemperature,
      temperature_2m: temperature,
      relative_humidity_2m: humidity,
      precipitation,
      weather_code: weatherCode,
      wind_speed_10m: windSpeed,
    },
    daily: {
      time: dailyTimes,
      weather_code: dailyWeatherCodes,
      temperature_2m_max: dailyMaxTemperatures,
      temperature_2m_min: dailyMinTemperatures,
    },
    hourly: {
      time: hourlyTimes,
      weather_code: hourlyWeatherCodes,
      temperature_2m: hourlyTemperatures,
    },
  } = weather;

  const current = {
    time,
    apparentTemperature,
    temperature,
    humidity,
    precipitation,
    weatherCode,
    windSpeed,
  };

  const daily = dailyTimes.map((date, index) => ({
    date,
    weatherCode: dailyWeatherCodes[index],
    temperatureMax: dailyMaxTemperatures[index],
    temperatureMin: dailyMinTemperatures[index],
  }));

  const hourly = hourlyTimes.map((date, index) => ({
    date,
    weatherCode: hourlyWeatherCodes[index],
    temperature: hourlyTemperatures[index],
  }));
  // console.log(daily);
  // console.log(hourly);
  return { location, current, daily, hourly };
}
fetchWeatherByLocation("adana");

export { fetchWeatherByLocation };
