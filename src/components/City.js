import { React, useEffect } from "react";
import useCurrentLocation from "./useCurrentLocation";

function City({ loc, setLoc, city }) {
  const { location } = useCurrentLocation();

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

  //set loc as selected city
  const handleChange = (e) => {
    e.preventDefault();
    var index = e.target.selectedIndex;
    setLoc(city[index]);
  };

  return (
    <div className="city">
      <select value={loc.name} onChange={handleChange}>
        {city.map((val, i) => (
          <option id={i} key={i} value={val.name}>
            {val.name}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
}

export default City;
