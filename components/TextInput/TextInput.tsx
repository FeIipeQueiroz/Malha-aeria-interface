import React from "react";
import { TextInputStyled } from "./TextInput.style";
import { TextFieldProps } from "@mui/material";

const TextInput: React.FC<TextFieldProps> = (props) => {
  return <TextInputStyled {...props}></TextInputStyled>;
};

export default TextInput;
