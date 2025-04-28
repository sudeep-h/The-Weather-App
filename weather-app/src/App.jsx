import { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import ErrorAlert from './components/ErrorAlert';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Weather App</h1>

      <SearchForm setWeatherData={setWeatherData} setError={setError} />

      {error && <ErrorAlert message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
