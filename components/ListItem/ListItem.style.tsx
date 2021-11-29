import { styled } from "@mui/system";
import { ListItem } from "@mui/material";

export const ListItemStyled = styled(ListItem)`
  height: fit-content;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: "fit-content";
  min-width: 190px;
  padding: 4px;
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`;

export const ColumnStyled = styled("div")`
  display: flex;
  padding: 8px;
  border-radius: 4px;
  flex-direction: column;
  min-width: 80%;
  min-height: 90px;
  max-height: 90px;
  flex-wrap: nowrap;
`;
