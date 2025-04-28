import { useState } from 'react';

function SearchForm({ setWeatherData, setError }) {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
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
        console.log("Error fetching data",err.message);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchForm;
