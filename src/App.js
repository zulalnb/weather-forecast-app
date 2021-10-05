import "./styles.css";
import { React } from "react";
import { CityProvider } from "./context/CityContext";
import { LocationProvider } from "./context/LocationContext";
import Container from "./components/Container";

export default function App() {
  return (
    <CityProvider>
      <LocationProvider>
        <Container />
      </LocationProvider>
    </CityProvider>
  );
}
