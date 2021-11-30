import React from "react";
import { Container, Typography } from "@mui/material";
import Button from "../components/Button/Button";
import Router from "next/router";
export default function index() {
  return (
    <Container
      sx={{
        margin: "auto",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Button
        color="success"
        variant="contained"
        sx={{ minHeight: "100px", minWidth: "100px" }}
        onClick={() => {
          Router.push("/A");
        }}
      >
        <Typography sx={{ fontSize: "50px" }}>A</Typography>
      </Button>
      <Button
        color="info"
        variant="contained"
        sx={{ minHeight: "100px", minWidth: "100px" }}
        onClick={() => {
          Router.push("/B");
        }}
      >
        <Typography sx={{ fontSize: "50px" }}>B</Typography>
      </Button>
      <Button
        color="warning"
        variant="contained"
        sx={{ minHeight: "100px", minWidth: "100px" }}
        onClick={() => {
          Router.push("/C");
        }}
      >
        <Typography sx={{ fontSize: "50px" }}>C</Typography>
      </Button>
    </Container>
  );
}
