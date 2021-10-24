import { useEffect, useState } from "react";
import axios from "axios";

function useOpenWeather({ loc, apiKey }) {
  const lat = loc.lat;
  const lon = loc.lon;
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  const [apiData, setApiData] = useState(null);

  // const data=await axios.get(apiUrl);
  // setApiData(data);

  useEffect(() => {
    // fetch(apiUrl)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setApiData(data);
    //   });
    const getData = async () => {
      const res = await axios(apiUrl);
      setApiData(res.data);
    };
    getData();
  }, []);

  return apiData;
}

function Weather({ loc }) {
  const weather = useOpenWeather({ loc, apiKey: process.env.API_KEY });

  var days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

  return (
    <div className="weather">
      {weather &&
        weather.daily.slice(0, 8).map((d, i) => (
          <div className={`dailyWeather${i}`}>
            <div className="day">{days[new Date(d.dt * 1000).getDay()]}</div>
            <img
              src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
              alt={d.weather[0].main}
            />
            <div>
              <span className="maxTemp">{Math.round(d.temp.max)}&#176;</span>{" "}
              <span className="minTemp">{Math.round(d.temp.min)}&#176;</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Weather;
