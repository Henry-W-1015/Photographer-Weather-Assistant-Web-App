import { useState } from "react";
import Button from "./Button";
import WeatherCard from "./WeatherCard";

// `http://localhost:5000/getHourlyWeatherByCity?name=${city}`
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
const weatherDataSample: DayWeather = {
  day0: [
    {
      time: "00:00",
      temp: 60,
      chance_rain: 0,
      cloud_cover_percent: 4,
      chance_of_sun: 92,
      type_weather: "Sunny",
    },
    {
      time: "03:00",
      temp: 59,
      chance_rain: 0,
      cloud_cover_percent: 28,
      chance_of_sun: 85,
      type_weather: "Partly Cloudy",
    },
    {
      time: "06:00",
      temp: 60,
      chance_rain: 0,
      cloud_cover_percent: 33,
      chance_of_sun: 71,
      type_weather: "Partly Cloudy",
    },
    {
      time: "09:00",
      temp: 68,
      chance_rain: 0,
      cloud_cover_percent: 7,
      chance_of_sun: 89,
      type_weather: "Sunny",
    },
    {
      time: "12:00",
      temp: 76,
      chance_rain: 0,
      cloud_cover_percent: 0,
      chance_of_sun: 88,
      type_weather: "Sunny",
    },
    {
      time: "15:00",
      temp: 76,
      chance_rain: 0,
      cloud_cover_percent: 6,
      chance_of_sun: 87,
      type_weather: "Sunny",
    },
    {
      time: "18:00",
      temp: 74,
      chance_rain: 0,
      cloud_cover_percent: 9,
      chance_of_sun: 91,
      type_weather: "Sunny",
    },
  ],
  day1: [
    {
      time: "00:00",
      temp: 70,
      chance_rain: 0,
      cloud_cover_percent: 32,
      chance_of_sun: 71,
      type_weather: "Partly Cloudy",
    },
    {
      time: "03:00",
      temp: 67,
      chance_rain: 0,
      cloud_cover_percent: 0,
      chance_of_sun: 88,
      type_weather: "Sunny",
    },
    {
      time: "06:00",
      temp: 66,
      chance_rain: 0,
      cloud_cover_percent: 0,
      chance_of_sun: 93,
      type_weather: "Sunny",
    },
    {
      time: "09:00",
      temp: 72,
      chance_rain: 0,
      cloud_cover_percent: 33,
      chance_of_sun: 75,
      type_weather: "Partly Cloudy",
    },
    {
      time: "12:00",
      temp: 77,
      chance_rain: 0,
      cloud_cover_percent: 6,
      chance_of_sun: 85,
      type_weather: "Sunny",
    },
    {
      time: "15:00",
      temp: 78,
      chance_rain: 0,
      cloud_cover_percent: 11,
      chance_of_sun: 93,
      type_weather: "Sunny",
    },
    {
      time: "18:00",
      temp: 77,
      chance_rain: 0,
      cloud_cover_percent: 28,
      chance_of_sun: 75,
      type_weather: "Partly Cloudy",
    },
  ],
  day2: [
    {
      time: "00:00",
      temp: 70,
      chance_rain: 100,
      cloud_cover_percent: 70,
      chance_of_sun: 0,
      type_weather: "Light Showers",
    },
    {
      time: "03:00",
      temp: 68,
      chance_rain: 0,
      cloud_cover_percent: 54,
      chance_of_sun: 88,
      type_weather: "Partly Cloudy",
    },
    {
      time: "06:00",
      temp: 67,
      chance_rain: 100,
      cloud_cover_percent: 53,
      chance_of_sun: 0,
      type_weather: "Light Showers",
    },
    {
      time: "09:00",
      temp: 72,
      chance_rain: 0,
      cloud_cover_percent: 12,
      chance_of_sun: 88,
      type_weather: "Sunny",
    },
    {
      time: "12:00",
      temp: 79,
      chance_rain: 0,
      cloud_cover_percent: 61,
      chance_of_sun: 18,
      type_weather: "Thundery Showers",
    },
    {
      time: "15:00",
      temp: 82,
      chance_rain: 0,
      cloud_cover_percent: 35,
      chance_of_sun: 88,
      type_weather: "Partly Cloudy",
    },
    {
      time: "18:00",
      temp: 76,
      chance_rain: 100,
      cloud_cover_percent: 88,
      chance_of_sun: 0,
      type_weather: "Thundery Showers",
    },
  ],
};
function TestAlbum() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };
  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const alertSet = () => {
    window.alert("Working on it!!!!");
  };

  const clearAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Weather App</h1>
          <p className="lead text-muted">
            Add the city you want to get alert. Set alert for best timing taking
            photos!
          </p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="input-section text-center mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Location"
              className="form-control mb-2"
              style={{ width: "50%", margin: "0 auto" }}
            />
            <button onClick={addItem} className="btn btn-primary">
              Add Location
            </button>
          </div>
          <div className="row">
            {items.map((item, index) => (
              <WeatherCard
                key={index}
                city={item}
                backgroundColor="lightblue" //"#7952b3" // Example custom background color
                onAlertClick={() => alertSet()}
                onDeleteClick={() => deleteItem(index)}
                weatherData={weatherDataSample}
              />
            ))}
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <Button color="dark mt-4" onClick={clearAllItems}>
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestAlbum;
