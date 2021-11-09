import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  // store location in state
  const [location, setLocation] = useState();

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      return false;
    }
    // Call the Geolocation API
    navigator.geolocation.getCurrentPosition(handleSuccess);
  }, []);

  // Expose location result
  return { location };
};

export default useCurrentLocation;
