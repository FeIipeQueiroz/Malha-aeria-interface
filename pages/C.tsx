import React from "react";
import { Container } from "@mui/material";
import TextInput from "../components/TextInput/TextInput";
import Row from "../components/Row/Row";
import Card from "../components/Card/Card";
import { useIndex } from "../data/hooks/useIndex";
import { CircularProgress } from "@mui/material";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Button from "../components/Button/Button";
import { ApiService } from "../data/services/apiServiceC";
export default function Search() {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    loading,
    searchDone,
    sendCities,
  } = useIndex(ApiService);
  let numbers = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container sx={{ alignItems: "center" }}>
      <Row>
        <TextInput
          value={origin}
          variant="outlined"
          label="Origem"
          onChange={(event) => setOrigin(event.target.value)}
          color="warning"
        ></TextInput>
        <TextInput
          value={destination}
          variant="outlined"
          label="Destino"
          onChange={(event) => setDestination(event.target.value)}
          color="warning"
        ></TextInput>
        <Button
          disabled={loading}
          color="warning"
          variant="contained"
          sx={{ minWidth: "9.4vw" }}
          onClick={() => {
            sendCities(origin, destination);
          }}
        >
          ENVIAR
        </Button>
      </Row>
      <Card data-color="e65100">
        {loading && (
          <CircularProgress
            color="warning"
            size="10rem"
            sx={{ alignSelf: "center", margin: "auto" }}
          />
        )}
        {searchDone && (
          <List>
            {numbers.map((element) => (
              <ListItem color="warning" secondColor="#fa8e5d" />
            ))}
          </List>
        )}
      </Card>
    </Container>
  );
}
