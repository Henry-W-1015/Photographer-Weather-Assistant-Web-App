import React, { useState, useEffect } from "react";

/*************
 * Everything in this file is just here to test out the backend routes
 *************/

//forecast that corresponds to 1 day
interface DailyForecast {
  date: string; //YYYY-MM-DD
  high: number;
  low: number;
  current: number;
  sunrise: string; //HH:MM
  sunset: string; //HH:MM
}
//forecast that corresponds to a set of days
interface DayForecast {
  [key: string]: DailyForecast;
}
//forecast that corresponds to 3 hours (API limit)
interface HourlyForecast {
  time: string; //HH:MM
  temp: number;
  chance_rain: number;
  cloud_cover_percent: number;
  chance_of_sun: number;
}
//forecast for 3 days of 3 hour interval weather
interface HourlyWeatherSet {
  [key: string]: HourlyForecast;
}

//return null or the successfully requested data
const fetchDailyWeather = async (city: string): Promise<DayForecast | null> => {
  try {
    //get is assumed by default
    const response = await fetch(
      `http://localhost:5000/getDailyWeatherByCity?name=${city}`
    );
    const data = await response.json();
    console.log("daily weather is \n" + data);
    return data as DayForecast;
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
};

const fetchHourlyWeather = async (
  city: string
): Promise<HourlyWeatherSet | null> => {
  try {
    const response = await fetch(
      `http://localhost:5000/getHourlyWeatherByCity?name=${city}`
    );
    const data = await response.json();
    console.log("hourly weather is: \n" + data);
    return data as HourlyWeatherSet;
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
};

//Functional react component, should update automatically when city changes
const DailyWeatherComponent: React.FC = () => {
  const [city, setCity] = useState<string>("New York");
  const [dailyWeatherData, setDailyWeatherData] = useState<DayForecast | null>(
    null
  );
  const [hourlyWeatherData, setHourlyWeatherData] =
    useState<HourlyWeatherSet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // const getDailyWeather = async () => {
    //   setLoading(true); //if we want a loading screen
    //   const data = await fetchDailyWeather(city);
    //   setWeatherData(data);
    //   setLoading(false);
    // };
    // const getHourlyWeather = async () => {

    // }
    const getWeatherData = async () => {
      setLoading(true); //for loading screen
      const dailyWeather = await fetchDailyWeather(city);
      setDailyWeatherData(dailyWeather);
      const hourlyWeather = await fetchHourlyWeather(city);
      setHourlyWeatherData(hourlyWeather);
    };

    getWeatherData();
    // getDailyWeather();
  }, [city]);
  return (
    //dummy code for testing purposes
    <div>
      <select onChange={(e) => setCity(e.target.value)} value={city}>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Tokyo">Tokyo</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
      </select>

      {loading && <div>Loading...</div>}
      {/* {error && <div>{error.message}</div>} Display error message */}
    </div>
  );
}; //ends DailyWeatherComponent

export default DailyWeatherComponent;
