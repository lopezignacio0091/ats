import styled, { keyframes } from "styled-components";
import Drawer from "@mui/material/Drawer";

export const DrawerContainer = styled(Drawer)`
 font-family: ${({ theme }) => theme.fonts.family};
  && {
    .MuiPaper-root {
      top: 54px;
      border-bottom-right-radius: 250px 100px;
    }
  }
  & span{
    font-family: ${({ theme }) => theme.fonts.family};
    color: ${({ theme }) => theme.blue};
  }
`;
