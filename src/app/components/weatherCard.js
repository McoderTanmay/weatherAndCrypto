"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { WiCloudy, WiDaySunny, WiRain, WiSnow } from "react-icons/wi";

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clouds":
      return <WiCloudy className="text-yellow-400 text-4xl" />;
    case "Clear":
      return <WiDaySunny className="text-yellow-400 text-4xl" />;
    case "Rain":
      return <WiRain className="text-blue-400 text-4xl" />;
    case "Snow":
      return <WiSnow className="text-white text-4xl" />;
    default:
      return <WiCloudy className="text-gray-400 text-4xl" />;
  }
};

const WeatherCard = ({ lat, lon, city, country }) => {
  const dispatch = useDispatch();
  const locationKey = `${lat},${lon}`;
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (!data[locationKey]) {
      dispatch(fetchWeather({ lat, lon }));
    }
  }, [dispatch, lat, lon, data]);

  const weatherData = data[locationKey];

  return (
    <div className="bg-[#0d1321] text-white rounded-lg p-6 w-64 shadow-lg">
      <h2 className="text-lg font-semibold">{city}</h2>
      <p className="text-sm text-gray-400">{country}</p>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {weatherData && (
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold"> {(weatherData.main.temp - 272.15).toFixed(2)}°C</p>
            {getWeatherIcon(weatherData.weather[0].main)}
          </div>
          <p className="text-gray-300">{weatherData.weather[0].description}</p>
          <p className="text-gray-300">Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
