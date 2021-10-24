import { React } from "react";
import City from "./City";
import Weather from "./Weather";
import { useCity } from "../context/CityContext";

function Container() {
  const { loc, setLoc, city } = useCity();
  return (
    <div>
      <h1>Weather Forecast</h1>
      <City loc={loc} setLoc={setLoc} city={city} />
      <Weather loc={loc} />
    </div>
  );
}

export default Container;
