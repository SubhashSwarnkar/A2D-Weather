import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';
import logo from '../assets/logo.png';
import mobile from '../assets/mobile.png';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    // Fetch city list
    axios.get('https://hiring-test.a2dweb.com/city-list?page=1&limit=5', {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setCities(response.data.list);
    })
    .catch(error => {
      console.error('Error fetching the city list', error);
    });
  }, [token]);

  const handleCityWeather = (cityId) => {
    axios.get(`https://hiring-test.a2dweb.com/live-weather/${cityId}`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setWeather(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching the weather data:', error.response ? error.response.data : error.message);
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.alert('Logged out successfully!');
    navigate('/login');
  };

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const formattedDay = currentTime.toLocaleDateString([], { weekday: 'long' });

  return (

    <div id="bg-colour">
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo" />
          {/* <a>Forecasting</a> */}
        </div>
        <div>
          <div className="dropdown px-5">
            <button className='button active'>
              {/* <a href="#">Locations</a> */}
              </button>
            <div className="dropdown-content active button ">
              <div className="search-container ">
                <input type="text" placeholder="Search for something..." />
                <button>Search</button>
              </div>
              {cities.map(city => (
                // <a className='py-3 text-nowrap text-capitalize text-center fs-6 d-flex justify-content-between align-items-center' id='nav-dropdown' onClick={() => handleCityWeather(city._id)} key={city._id}>
                <div onClick={() => handleCityWeather(city._id)} key={city._id}>
                {city.name}
                  <span className="text-end fs-6">{city.maxTemperature}°/{city.minTemperature}°</span>
                {/* // </a> */}
                </div>  
              ))}
            </div>
          </div>
          <button className='mx-5 btn btn-primary' onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div id="main">
        <div>
          <div className="sidebar">
            <h5 className='container'>Main</h5>
            {/* <a href="/home" className="active button my-4">Dashboard</a>
            <a className='active button' href="/forecast">Forecast report</a> */}
            <div className='py-5 my-5'>
              <img className='mobile-img' src={mobile} alt="Logo" />
              <button className='btn-primary btn'>Upgrade to Pro</button>
            </div>
          </div>
        </div>

        <div>
          <div id="card-center">
            <div className="card weather-report button">
              {weather ? (
                <>
                  <div><i className="weather-icon fas fa-cloud"></i></div>
                  <h2>{formattedDay}, {formattedTime}</h2>
                  <div className="weather-info">
                    <div><span>Temperature: {weather.temperature}°C</span></div>
                    <span>Max Temp: {weather.maxTemperature}°C</span>
                    <span>Min Temp: {weather.minTemperature}°C</span>
                    <span>Conditions: {weather.condition}</span>
                    <span>Wind Speed: {weather.windSpeed} km/h</span>
                    <span>Humidity: {weather.humidity}%</span>
                  </div>
                </>
              ) : (
                <p>No data found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
