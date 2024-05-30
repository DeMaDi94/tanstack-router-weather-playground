/** @format */

const fetchWeather = async (lat: string, lng: string) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  );

  const responseJson = await response.json();

  return responseJson;
};

export default fetchWeather;
