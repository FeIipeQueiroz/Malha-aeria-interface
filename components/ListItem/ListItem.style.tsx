import { styled } from "@mui/system";
import { ListItem, Divider } from "@mui/material";

export const DividerStyled = styled(Divider)`
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-delay: 0.8s;
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
  min-width: 250px;
  height: fit-content;

  :hover {
    transform: scale(1);
  }

  transform: scale(0.97);
  transition: transform ease 0.3s;
`;

export const RowContent = styled("div")`
  display: flex;
  max-width: 80%;
  min-height: 130px;
  overflow: auto;
  align-items: center;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props["data-color"]};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props["data-color"]};
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 0px;
  }
`;
