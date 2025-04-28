import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorAlert';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError('');
      setWeatherData(null);

      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError('City not found. Try again.');
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      console.log('Error fetching data', err.message);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 👇 Fetch default city weather when app loads
    fetchWeather('Delhi');
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">Weather App</h1>

      <SearchForm setWeatherData={setWeatherData} setError={setError} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
