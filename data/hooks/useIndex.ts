import { useState } from "react";

export function useIndex() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchDone, setSearchDone] = useState(false);

  function sendCities(origin: string, destination: string) {
    setSearchDone(false);
    setLoading(true);
    setTimeout(() => {
      console.log(origin, destination);
      setLoading(false);
      setSearchDone(true);
    }, 1000);
  }

  return {
    origin,
    setOrigin,
    destination,
    setDestination,
    loading,
    searchDone,
    sendCities,
  };
}
