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
export default function Home() {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    loading,
    searchDone,
    sendCities,
  } = useIndex();

  return (
    <Container sx={{ alignItems: "center" }}>
      <Row>
        <TextInput
          value={origin}
          variant="outlined"
          label="Origem"
          onChange={(event) => setOrigin(event.target.value)}
        ></TextInput>
        <TextInput
          value={destination}
          variant="outlined"
          label="Destino"
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
      <Card>
        {loading && (
          <CircularProgress
            size="10rem"
            sx={{ alignSelf: "center", margin: "auto" }}
          />
        )}
        {searchDone && (
          <List>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </List>
        )}
      </Card>
    </Container>
  );
}
