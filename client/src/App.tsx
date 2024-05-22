import "./App.css";

import DailyWeatherComponent from "./Weather";
import Clock from "./components/Clockcomp";
import TestAlbum from "./components/testing";
import Album from "./components/Album";

function App() {
  // return <div><ListGroup /></div>;
  return (
    <>
      <div>
        <Clock />
        <DailyWeatherComponent></DailyWeatherComponent>

        <TestAlbum />
      </div>
    </>
  );
}

export default App;
