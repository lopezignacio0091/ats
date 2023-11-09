import styled from "styled-components";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)`
  && {
    color: ${({theme})=> theme.blue};
    height: 54px;
    background-color: white;

  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  & #login{
    font-family: ${({ theme }) => theme.fonts.family};
  }
`;
