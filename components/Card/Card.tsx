import React from "react";
import { CardContainer, CardContent } from "./Card.style";
const Card = (props) => {
  return (
    <CardContainer>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};

export default Card;
