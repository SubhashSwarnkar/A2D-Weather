import React, { useEffect, useState } from "react";
import axios from "axios";
import "./forcast.css";
import logo from "../assets/logo.png"

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [smallForecast, setSmallForecast] = useState(null);
  const [otherForecast, setOtherForecast] = useState(null);
  const cityId = "6565cfa390d7c285c09af95f"; // Example city ID
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmciOiJhMmQiLCJ1c2VySWQiOiI2NTY1Y2Q3NDJmNzc1MTlhNzY5YjA2NGIiLCJhcHAiOiJ3ZWF0aGVyIiwiZGV2Ijoic3VtYW4iLCJpYXQiOjE3MTc4MjU3Njd9.2aH3ZXO3WuT_Mf2YPi9rAo7qtaw3ygEg2T0pHmM77xM";

  useEffect(() => {
   
    axios
      .get("https://hiring-test.a2dweb.com/city-list?page=1&limit=5", {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCities(response.data.list);
      })
      .catch((error) => {
        console.error(
          "Error fetching the city list:",
          error.response ? error.response.data : error.message
        );
      });
  }, [cityId, token]);

  const handleCityWeather = (cityId) => {
    axios
      .get(`https://hiring-test.a2dweb.com/view-small-forecast/${cityId}`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response?.data?.DATA);
        setSmallForecast(response?.data?.DATA);
      })
      .catch((error) => {
        console.error(
          "Error fetching the weather data:",
          error.response ? error.response.data : error.message
        );
      });
      axios
      .get(`https://hiring-test.a2dweb.com/view-other-forecast/${cityId}`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOtherForecast(response.data.DATA);
      })
      .catch((error) => {
        console.error(
          "Error fetching the other forecast data:",
          error.response ? error.response.data : error.message
        );
      });
  };


  
  

  return (
    <div id="bg-colour">
      <div className="navbar">
        <div>
        <img src={logo} alt="Logo" />
          <a  href="#">Forecasting</a>
        </div>
        <div>
          <div className="dropdown px-5">
            <a href="#">Locations</a>
            <div className="dropdown-content">
              <div className="search-container">
                <input type="text" placeholder="Search for something..." />
                <button>Search</button>
              </div>
              {cities.map((city) => (
                <a
                  href="#"
                  onClick={() => handleCityWeather(city._id)}
                  key={city._id}
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>
          <button className="btn btn-primary mx-5">Logout</button>
        </div>
      </div>

      <div id="main-">
        <div className="sidebar">
          <a href="/home" className="active">
            Dashboard
          </a>
          <a href="/home">Forecast report</a>
        </div>

        <div className="content">
         
        <h3 className="py-4">Today</h3>
          {smallForecast?.length ? (
            <div className=" d-flex justify-content-around ">
              
              {Object.keys(smallForecast?.[0])
                .filter((key) => key.startsWith("data"))
                .map((key) => {
                  return (
                   
                    <div  className="card  px-4 text-center" key={key}>
                    <p> {smallForecast?.[0]?.[key]?.temperature}</p>
                      <p> {smallForecast?.[0]?.[key]?.condition}</p>
                      <p> {smallForecast?.[0]?.[key]?.time}</p>
                    </div>
                   
                   
                  );
                })}
            </div>
          ) : (
            <p>No data found</p>
          )}

          {otherForecast ? (
            <div>
              <h2>Other Forecast</h2>
              {Object.keys(otherForecast?.[0])
                .filter((key) => key.startsWith("day"))
                .map((key) => {
                    


                    <div  className="card  px-4 text-center" key={key}>
                        <p> {otherForecast?.[0]?.[key]?.day}</p>
                    <p> {otherForecast?.[0]?.[key]?.temperature}</p>
                      <p> {otherForecast?.[0]?.[key]?.condition}</p>
                      
                    </div>
})}
            </div>
          ) : (
            <h3 className="my-5">Next Forecast</h3>
          )}
        </div>
      </div>
    </div>
  );
}
