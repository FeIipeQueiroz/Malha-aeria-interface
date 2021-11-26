import { styled } from "@mui/system";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;

  //min-height: 50vh;
`;

export const CardContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid grey;
  overflow: auto;
  border-radius: 4px;
  min-height: 68vh;
  max-height: 68vh;
  min-width: 76.6vw;
  padding-top: 3%;
  padding-left: 2%;
`;
