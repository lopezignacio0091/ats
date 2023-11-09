import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "./components/Drawer/Drawer";
import { Container, StyledAppBar } from "./styles";
import BasicMenu from "./components/Menu/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, height: "60px" , position:"absolute" , zIndex:2 , width:"100%"}}>
        <StyledAppBar position="static">
          <Container>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={() => setOpen(!open)} />
            </IconButton>
            <Button
              color="inherit"
              onClick={handleMenuClick}
              startIcon={<AccountCircleIcon />}
              id="login"
            >
              Login
            </Button>
            <BasicMenu
              open={openMenu}
              onClose={handleMenuClose}
              anchorEl={anchorEl}
            />
          </Container>
        </StyledAppBar>
      </Box>
      <TemporaryDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Nav;
