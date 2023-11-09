import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export const MenuItemStyled = styled(MenuItem)`
  && {
    font-size: ${({ theme }) => theme.fonts.fontSizeMedium};
    font-family: ${({ theme }) => theme.fonts.family};
    gap: 4px;
  }
`;

export const MenuStyled = styled(Menu)`
 font-family: ${({ theme }) => theme.fonts.family};
  && {
    top: 6px;
  }
  
`;
