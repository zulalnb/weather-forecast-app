import "./styles.css";
import { React } from "react";
import { CityProvider } from "./context/CityContext";
import Container from "./components/Container";

export default function App() {
  return (
    <CityProvider>
      <Container />
    </CityProvider>
  );
}
