import { createContext, useState, useContext } from "react";
import { data } from "../data";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  //all cities
  const [city, setCity] = useState(data);
  //default city
  const [loc, setLoc] = useState(data[39]);

  const values = { city, loc, setLoc };

  return (
    <CityContext.Provider value={values}> {children} </CityContext.Provider>
  );
};

const useCity = () => useContext(CityContext);

export { CityProvider, useCity };
