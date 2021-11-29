import React from "react";
import { ButtonStyled } from "./Button.style";
import { ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Button;
