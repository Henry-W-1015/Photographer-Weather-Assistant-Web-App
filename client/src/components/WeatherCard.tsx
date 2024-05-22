import React, { useState, useEffect } from "react";
import Button from "./Button"; // Import your Button component
interface Weather {
  time: string;
  temp: number;
  chance_rain: number;
  cloud_cover_percent: number;
  chance_of_sun: number;
  type_weather: string;
}

interface DayWeather {
  day0: Weather[];
  day1: Weather[];
  day2: Weather[];
}

function getNextHourWeather(weatherDataSample: DayWeather) {
  const now = new Date();
  const hours = now.getHours();
  const availableHours = [0, 3, 6, 9, 12, 15, 18];
  let nextHour = (hours + 1) % 24;
  let nearestNextHour = availableHours.find((hour) => hour >= nextHour);
  if (nearestNextHour === undefined) {
    nearestNextHour = availableHours[0]; // If next hour is not available, use the first hour of the next day
  }

  const nextHourString = `${nearestNextHour.toString().padStart(2, "0")}:00`;
  //console.log("!!!" + now.getHours());

  const forecasts = weatherDataSample["day0"];

  //console.log("!!!" + forecasts);
  for (const forecast of forecasts) {
    if (forecast.time === nextHourString) {
      return forecast;
    }
  }

  return null; // Return null if no matching forecast found
}
const getBackgroundColor = (typeWeather: string) => {
  switch (typeWeather) {
    case "Sunny":
      return "#F7DC6F"; // Yellow
    case "Partly Cloudy":
      return "#ADD8E6"; // Light Blue
    case "Light Showers":
      return "#87CEEB"; // Sky Blue
    case "Thundery Showers":
      return "#4682B4"; // Steel Blue
    default:
      return "#55595c"; // Default Gray
  }
};

interface WeatherCardProps {
  city: string;
  onAlertClick: () => void;
  onDeleteClick: () => void;
  backgroundColor?: string; // Optional background color
  weatherData: DayWeather; // Placeholder for future weather data
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  onAlertClick,
  onDeleteClick,
  //backgroundColor = "Green", //"#55595c", // Default background color
  weatherData,
}) => {
  const nextHourWeather = getNextHourWeather(weatherData);

  const backgroundColor = getBackgroundColor(
    nextHourWeather ? nextHourWeather.type_weather : ""
  );
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
          style={{ backgroundColor }} // Apply background color
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill={backgroundColor} />
          <text x="15%" y="20%" fill="black" dy=".3em">
            {nextHourWeather ? (
              <>
                <tspan x="center" dy="1.2em">
                  {nextHourWeather.time}
                </tspan>
                <tspan x="left" dy="1.6em" fontSize={32}>
                  {nextHourWeather.type_weather}
                </tspan>
                <br />
                <tspan x="left" dy="1.8em">
                  Temp: {nextHourWeather.temp}°C
                </tspan>
              </>
            ) : (
              "No data"
            )}
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">{city}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Button color="sm btn-outline-secondary" onClick={onAlertClick}>
                Alert
              </Button>
              <Button color="sm btn-outline-secondary" onClick={onDeleteClick}>
                Delete
              </Button>
            </div>
            <small className="text-muted">Last time update</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
