import { Typography } from "@mui/material";
import React from "react";
import {
  ListItemStyled,
  ColumnStyled,
  RowContent,
  DividerStyled,
} from "./ListItem.style";
import Button from "../Button/Button";
import { Link } from "../../data/@types/LinkInterface";

interface ListItemProps {
  color: string;
  secondColor: string;
  route: Link[];
  key: number;
}

const ListItem = (props) => {
  let color = props.color;
  let secondColor = props.secondColor;
  const clickHandle = props.onClick;

  return (
    <>
      <ListItemStyled>
        <RowContent data-color={secondColor}>
          {props.route.map((element) => (
            <ColumnStyled sx={{ backgroundColor: secondColor }}>
              <>
                <Typography
                  sx={{ fontSize: "1.2rem", margin: "0px", padding: "0px" }}
                >
                  De {element.Origem} Para {element.Destino}
                </Typography>
                <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                  R$ {element.valor}
                </Typography>
                <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                  Tempo: {element.tempo} min.
                </Typography>
                <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                  Assentos Disponíveis: {element.seats}
                </Typography>
              </>
            </ColumnStyled>
          ))}
        </RowContent>
        <Button
          color={color}
          variant="contained"
          sx={{ minWidth: "170px", minHeight: "90px", maxHeight: "90px" }}
          onClick={(e) => {
            clickHandle(props.route);
          }}
        >
          COMPRAR
        </Button>
      </ListItemStyled>
    </>
  );
};

export default ListItem;
