import { createContext, useState, useContext, useEffect } from "react";
import { data } from "../data";
import useCurrentLocation from "./useCurrentLocation";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const { location } = useCurrentLocation();
  //all cities
  const [city, setCity] = useState(data);
  //default city
  const [loc, setLoc] = useState(data[39]);

  //if location access permission is allowed, find nearest city to current location.
  useEffect(() => {
    location && NearestCity(location.latitude, location.longitude);
  }, [location]);

  // Convert Degress to Radians
  function Deg2Rad(deg) {
    return (deg * Math.PI) / 180;
  }

  function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = lat2 - lat1;
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
  }

  function NearestCity(latitude, longitude) {
    var minDif = 99999;
    var closest;
    var dif;

    city.map((item, index) => {
      dif = PythagorasEquirectangular(latitude, longitude, item.lat, item.lon);
      if (dif < minDif) {
        closest = index;
        minDif = dif;
      }
    });

    // set loc as the nearest city
    setLoc(city[closest]);
  }

  const values = { city, loc, setLoc };

  return (
    <CityContext.Provider value={values}> {children} </CityContext.Provider>
  );
};

const useCity = () => useContext(CityContext);

export { CityProvider, useCity };
