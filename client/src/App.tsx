import "./App.css";

import DailyWeatherComponent from "./Weather";
import Clock from "./components/Clockcomp";

import Album from "./components/Album";

function App() {
  // return <div><ListGroup /></div>;
  return (
    <>
      <div>
        <Clock />
        <DailyWeatherComponent></DailyWeatherComponent>

        <Album />
      </div>
    </>
  );
}

export default App;
