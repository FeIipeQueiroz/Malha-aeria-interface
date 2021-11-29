import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  :hover {
    transform: scale(1);
  }

  -webkit-transform: scale(0.88);
  transform: scale(0.88);
  transition: transform ease 0.3s;
`;
