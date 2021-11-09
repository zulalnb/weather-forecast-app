import { React } from "react";

function City({ loc, setLoc, city }) {
  
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
