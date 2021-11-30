import { styled } from "@mui/system";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  padding-top: 0px;
`;

export const CardContent = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 4px;
  min-height: 68vh;
  max-height: 68vh;
  min-width: 76.6vw;

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
