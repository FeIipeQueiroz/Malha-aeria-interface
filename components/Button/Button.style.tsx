import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  :hover {
    transform: scale(1);
  }

  transform: scale(0.9);
  transition: transform ease 0.3s;
`;
