import {
  Typography,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@mui/material";
import React from "react";
import { ListItemStyled, ColumnStyled } from "./ListItem.style";
import Button from "../Button/Button";

const ListItem = (props) => {
  return (
    <ListItemStyled>
      <ColumnStyled sx={{ backgroundColor: "#C4C4C4" }}>
        <Typography sx={{ fontSize: "1.2rem", margin: "0px", padding: "0px" }}>
          Teste
        </Typography>
        <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
          Teste
        </Typography>
        <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
          Teste
        </Typography>
      </ColumnStyled>

      <Button
        color="success"
        variant="contained"
        sx={{ minWidth: "170px", minHeight: "90px", maxHeight: "90px" }}
        onClick={() => {}}
      >
        COMPRAR
      </Button>
    </ListItemStyled>
  );
};

export default ListItem;
