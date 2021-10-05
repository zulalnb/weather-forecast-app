import { createContext, useState, useContext } from "react";
import { data } from "../data";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  //all cities
  const [city, setCity] = useState(data);

  const values = { city, setCity };

  return (
    <CityContext.Provider value={values}> {children} </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);
