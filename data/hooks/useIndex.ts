import { AxiosInstance } from "axios";
import { useState } from "react";
import { Link } from "../@types/LinkInterface";
export function useIndex(ApiService: AxiosInstance) {
  const [message, setMessage] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchDone, setSearchDone] = useState(false);
  const [routes, setRoutes] = useState<Link[][]>();

  function sendCities(origin: string, destination: string) {
    setMessage(null);
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
        setRoutes(response.data.routes);
        setSearchDone(true);
        setLoading(false);
        clearInterval(loop);
      }
    }, 3000);
  }

  function purchaseRoute(route: Link[]) {
    setMessage(null);
    const loop = setInterval(async () => {
      const response = await ApiService.post("/purchaseRoute", {
        route: route,
      });

      if (response.data.status == "Não sou o coordenador") {
      } else if (response.data.status == "Reservado com Sucesso") {
        setMessage({ status: "sucess", text: response.data.status });
        clearInterval(loop);
      } else if (response.data.status == "Não foi possível") {
        setMessage({ status: "error", text: response.data.status });
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
    message,
    purchaseRoute,
  };
}
