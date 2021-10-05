import { React } from "react";
import City from "./City";
import Weather from "./Weather";
import { useLoc } from "../context/LocationContext";

function Container() {
  const { loc, setLoc } = useLoc();
  return (
    <div>
      <h1>Weather Forecast</h1>
      <City loc={loc} setLoc={setLoc} />
      <Weather loc={loc} />
    </div>
  );
}

export default Container;
