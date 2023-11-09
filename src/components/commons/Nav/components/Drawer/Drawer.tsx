import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerProps } from "./types";
import { DrawerContainer } from "./styles";
import { useHistory } from "react-router";

const TemporaryDrawer = ({ open, onClose }: DrawerProps) => {
  const history = useHistory();
  const list = () => (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {["Principal"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={()=> history.push("/home")}>
            <ListItemButton >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Reserva", "Contacto"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <DrawerContainer
          anchor="left"
          open={open}
          onClose={onClose}
        >
          {list()}
        </DrawerContainer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
