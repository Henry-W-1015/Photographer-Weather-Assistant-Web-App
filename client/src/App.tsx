import "./App.css";
import BookMarkList from "./components/ListGroup";
import DailyWeatherComponent from "./Weather";
import Clock from "./components/Clockcomp";

function App() {
  // return <div><ListGroup /></div>;
  return (
    <div>
      <h1>Weather App</h1>
      <Clock />
      <DailyWeatherComponent></DailyWeatherComponent>

      <BookMarkList />
    </div>
  );
}

export default App;
