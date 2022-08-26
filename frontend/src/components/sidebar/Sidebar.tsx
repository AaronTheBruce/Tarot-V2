import React, { useCallback, useMemo, useState } from "react";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { LooksOne, Looks3, Filter9Plus } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { IconButton } from "@material-ui/core";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback((m: boolean) => setMenu(!m), []);

  return (
    <React.Fragment>
      <IconButton style={{ float: "left" }} onClick={() => toggleMenu(menu)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={menu} onClose={() => setMenu(false)}>
        <List>
          <nav aria-label="main utility pages">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>
                  Profile
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </nav>
        </List>
        <Divider />
        <nav aria-label="main spread pages">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LooksOne />
                </ListItemIcon>
                <ListItemText>Single Card</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Looks3 />
                </ListItemIcon>
                <ListItemText>Three Card</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Filter9Plus />
                </ListItemIcon>
                <ListItemText>Ten Card</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
