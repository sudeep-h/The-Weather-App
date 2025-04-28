function WeatherCard({ data }) {
    const { name, main, weather } = data;
    const { temp, temp_min, temp_max, humidity } = main;
    const { description, icon } = weather[0];
  
    return (
      <div className="card text-center shadow rounded p-4" style={{ width: '18rem', background: 'linear-gradient(to right, #83a4d4, #b6fbff)' }}>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
  
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="my-3"
          />
  
          <h1 className="display-4 mb-3">{Math.round(temp)}°C</h1>
  
          <p className="text-capitalize">{description}</p>
  
          <div className="d-flex justify-content-between mt-4">
            <div>
              <small>Min</small>
              <div>{Math.round(temp_min)}°C</div>
            </div>
            <div>
              <small>Max</small>
              <div>{Math.round(temp_max)}°C</div>
            </div>
            <div>
              <small>Humidity</small>
              <div>{humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default WeatherCard;
  