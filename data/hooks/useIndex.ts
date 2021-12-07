import { AxiosInstance } from "axios";
import { useState } from "react";
import { Link } from "../@types/LinkInterface";
export function useIndex(ApiService: AxiosInstance) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchDone, setSearchDone] = useState(false);
  const [routes, setRoutes] = useState<Link[][]>([
    [
      {
        origin: "Salvador",
        destin: "Forteleza",
        valor: 15,
        tempo: 120,
        company: "A",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 120,
        company: "C",
        seats: 5,
      },
    ],
    [
      {
        origin: "Salvador",
        destin: "Amapá",
        valor: 10,
        tempo: 180,
        company: "A",
        seats: 5,
      },
      {
        origin: "Amapá",
        destin: "Manaus",
        valor: 25,
        tempo: 150,
        company: "B",
        seats: 5,
      },
    ],
    [
      {
        origin: "Salvador",
        destin: "Amapá",
        valor: 10,
        tempo: 180,
        company: "A",
        seats: 5,
      },
      {
        origin: "Amapá",
        destin: "Fortaleza",
        valor: 25,
        tempo: 150,
        company: "B",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 150,
        company: "C",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 120,
        company: "C",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 120,
        company: "C",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 120,
        company: "C",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 120,
        company: "C",
        seats: 5,
      },
      {
        origin: "Fortaleza",
        destin: "Manaus",
        valor: 25,
        tempo: 120,
        company: "C",
        seats: 5,
      },
    ],
  ]);

  function sendCities(origin: string, destination: string) {
    setSearchDone(false);
    setLoading(true);
    let i = 0;

    const loop = setInterval(async () => {
      const response = await ApiService.post("/searchRoutes", {
        origem: origin,
        destino: destination,
      });
      console.log(response.data);
      if (response.data.status == "Não sou o coordenador") {
      } else {
        setSearchDone(true);
        setLoading(false);
        clearInterval(loop);
      }
    }, 3000);
  }

  return {
    origin,
    setOrigin,
    destination,
    setDestination,
    loading,
    searchDone,
    sendCities,
    routes,
  };
}
