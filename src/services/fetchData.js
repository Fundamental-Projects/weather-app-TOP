const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1/forecast";

async function fetchGeoData(searchTerm) {
  try {
    if (!searchTerm.trim()) {
      console.log("No search term provided. Skipping fetch.");
      return null;
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

    const result = data.results[0] ? data.results[0] : "Result not found";

    console.log(result);

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

async function fetchResult(searchTerm) {
  const {
    latitude,
    longitude,
    name: city,
    country,
    timezone,
    ...otherInfos
  } = await fetchGeoData(searchTerm);
  const location = { city, country, timezone };
  const weather = await fetchWeatherData(latitude, longitude);

  console.log(location);

  return { location, weather };
}
fetchResult("adana");

export { fetchResult };
