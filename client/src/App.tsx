
import './App.css'
import ListGroup from "./components/ListGroup"
import DailyWeatherComponent from './Weather';

function App() {
  // return <div><ListGroup /></div>;
  return (<div>
    <h1>Weather App</h1>
    <DailyWeatherComponent></DailyWeatherComponent>
  </div>)
}

export default App;
