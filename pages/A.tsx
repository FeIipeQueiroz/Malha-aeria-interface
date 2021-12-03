import React from "react";
import { Container, Divider } from "@mui/material";
import TextInput from "../components/TextInput/TextInput";
import Row from "../components/Row/Row";
import Card from "../components/Card/Card";
import { useIndex } from "../data/hooks/useIndex";
import { CircularProgress } from "@mui/material";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Button from "../components/Button/Button";
import { ApiService } from "../data/services/apiServiceA";
export default function Search() {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    loading,
    searchDone,
    sendCities,
    routes,
  } = useIndex(ApiService);

  return (
    <Container sx={{ alignItems: "center" }}>
      <Row>
        <TextInput
          value={origin}
          variant="outlined"
          label="Origem"
          onChange={(event) => setOrigin(event.target.value)}
          color="success"
        ></TextInput>
        <TextInput
          value={destination}
          variant="outlined"
          label="Destino"
          color="success"
          onChange={(event) => setDestination(event.target.value)}
        ></TextInput>
        <Button
          disabled={loading}
          color="success"
          variant="contained"
          sx={{ minWidth: "9.4vw" }}
          onClick={() => {
            sendCities(origin, destination);
          }}
        >
          ENVIAR
        </Button>
      </Row>
      <Card data-color="#2e7d32">
        {loading && (
          <CircularProgress
            color="success"
            size="10rem"
            sx={{ alignSelf: "center", margin: "auto" }}
          />
        )}
        {searchDone && (
          <List>
            {routes.map((route) => (
              <ListItem color="success" secondColor="#77a873" route={route} />
            ))}
          </List>
        )}
      </Card>
    </Container>
  );
}
