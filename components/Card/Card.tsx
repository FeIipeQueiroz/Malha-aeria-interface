import React from "react";
import { CardContainer, CardContent } from "./Card.style";
const Card = (props) => {
  return (
    <CardContainer>
      <CardContent data-color={props["data-color"]}>
        {props.children}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
