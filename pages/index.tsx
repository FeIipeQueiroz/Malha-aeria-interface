import React from "react";
import { Container } from "@mui/material";
import TextInput from "../components/TextInput/TextInput";
import Row from "../components/Row/Row";
import { Button } from "@mui/material";
import Card from "../components/Card/Card";
export default function Home() {
  return (
    <Container sx={{ alignItems: "center" }}>
      <Row>
        <TextInput variant="outlined" label="Origem"></TextInput>
        <TextInput variant="outlined" label="Destino"></TextInput>
        <Button color="success" variant="contained" sx={{ minWidth: "9.4vw" }}>
          ENVIAR
        </Button>
      </Row>
      <Card></Card>
    </Container>
  );
}
