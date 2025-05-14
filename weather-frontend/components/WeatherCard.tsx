import React from 'react';

interface WeatherCardProps {
  weather: any;
  unit: 'metric' | 'imperial';
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, unit }) => {
  const { wind, main, weather: weatherDetails, sys, name } = weather;

  const temperature = unit === 'metric' ? main.temp : ((main.temp * 9) / 5) + 32;
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  const windSpeed = wind?.speed ?? 'N/A';
  const windGust = wind?.gust ?? null;
  const windDeg = wind?.deg ?? null;

  const sunrise = sys?.sunrise ? new Date(sys.sunrise * 1000).toLocaleTimeString() : 'N/A';
  const sunset = sys?.sunset ? new Date(sys.sunset * 1000).toLocaleTimeString() : 'N/A';

  const weatherIcon = weatherDetails[0]?.icon;
  const description = weatherDetails[0]?.description ?? '';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto text-gray-800">
      <h2 className="text-2xl font-semibold text-center mb-2">{name}</h2>
      <p className="text-center text-sm capitalize mb-4">{description}</p>

      {/* Weather Icon */}
      {weatherIcon && (
        <div className="flex justify-center mb-4">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="weather icon"
            className="w-20 h-20"
          />
        </div>
      )}

      {/* Temperature */}
      <div className="text-center text-4xl font-bold mb-4">
        {temperature.toFixed(1)}{unitSymbol}
      </div>

      {/* Weather Metrics */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Pressure</p>
          <p>{main.pressure} hPa</p>
        </div>
        <div>
          <p className="font-semibold">Wind Speed</p>
          <p>{windSpeed} m/s</p>
        </div>
        {windGust && (
          <div>
            <p className="font-semibold">Wind Gust</p>
            <p>{windGust} m/s</p>
          </div>
        )}
        {windDeg && (
          <div>
            <p className="font-semibold">Wind Direction</p>
            <p>{windDeg}°</p>
          </div>
        )}
        <div>
          <p className="font-semibold">Sunrise</p>
          <p>{sunrise}</p>
        </div>
        <div>
          <p className="font-semibold">Sunset</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
