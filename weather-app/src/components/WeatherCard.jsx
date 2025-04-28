function WeatherCard({ data }) {
    const { name, main, weather, wind } = data;
  
    return (
      <div className="card mx-auto p-3" style={{ width: '22rem' }}>
        <h5 className="card-title text-center">{name}</h5>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          className="card-img-top mx-auto"
          alt="Weather Icon"
          style={{ width: '100px' }}
        />
        <div className="card-body text-center">
          <h6 className="card-text">{main.temp}°C</h6>
          <p className="card-text text-capitalize">{weather[0].description}</p>
          <p className="card-text">
            <strong>Humidity:</strong> {main.humidity}%<br />
            <strong>Wind:</strong> {wind.speed} m/s
          </p>
        </div>
      </div>
    );
}
  
export default WeatherCard;
  