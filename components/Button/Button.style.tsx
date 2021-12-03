import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)`
  :hover {
  }
  :active {
    transform: scale(0.9);
  }

  transform: scale(1);
  transition: transform ease-in-out 100ms;
`;
