import { useState } from "react";
import Button from "./Button";

interface DailyForecast {
  date: string; //YYYY-MM-DD
  high: number;
  low: number;
  current: number;
  sunrise: string; //HH:MM
  sunset: string; //HH:MM
}
interface DayForecast {
  [key: string]: DailyForecast;
}

function Album() {
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
              placeholder="Enter item description"
              className="form-control mb-2"
              style={{ width: "50%", margin: "0 auto" }}
            />
            <button onClick={addItem} className="btn btn-primary">
              Add Location
            </button>
          </div>
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    // xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="center" y="50%" fill="#eceeef" dy=".3em">
                      Current weather data
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">{item}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Button
                          color="sm btn-outline-secondary"
                          onClick={() => alertSet()}
                        >
                          Alert
                        </Button>
                        <Button
                          color="sm btn-outline-secondary"
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </Button>
                      </div>
                      <small className="text-muted">Last time update</small>
                    </div>
                  </div>
                </div>
              </div>
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

export default Album;
