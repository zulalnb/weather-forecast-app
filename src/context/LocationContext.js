import { createContext, useState, useContext } from "react";
import { data } from "../data";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [loc, setLoc] = useState(data[40]);

  const values = { loc, setLoc };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLoc = () => useContext(LocationContext);
