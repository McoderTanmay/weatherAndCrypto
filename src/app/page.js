import WeatherCard from "./components/weatherCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-white text-2xl font-bold mb-6">CryptoWeather Nexus</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WeatherCard lat={40.7128} lon={-74.0060} city="New York" country="USA" />
        <WeatherCard lat={51.5074} lon={-0.1278} city="London" country="UK" />
        <WeatherCard lat={35.6895} lon={139.6917} city="Tokyo" country="Japan" />
      </div>
    </div>
  );
}