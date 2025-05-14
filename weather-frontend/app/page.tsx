'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '@/components/WeatherCard';

type WeatherData = any; // Replace with your real weather data type from backend

export default function Home() {
  const [city, setCity] = useState<string>('Nairobi');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/weather?city=${cityName}&unit=${unit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city, unit]);

  const handleSearch = () => fetchWeather(city);

  const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const toggleUnit = () => {
    setUnit(prev => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Weather App</h1>

      {/* Search and Unit Toggle Section */}
      <section className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={handleCityInput}
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded shadow-sm w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
        <button
          onClick={toggleUnit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </section>

      {/* Weather Display */}
      {loading ? (
        <p className="text-center text-lg">Loading weather data...</p>
      ) : (
        weather && <WeatherCard weather={weather} unit={unit} />
      )}
    </main>
  );
}
