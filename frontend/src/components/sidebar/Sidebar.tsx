import React, { useCallback, useMemo, useState } from "react";
import { Drawer, Container } from "@material-ui/core";
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

  const click = useCallback((e: any) => {
    console.log('e', e);
    toggleMenu(true);

  }, []); 

  return (
    <Container style={{ position: 'absolute', top: '1px', left: '1px'}}> 
      <IconButton style={{ float: "left" }} onClick={() => toggleMenu(menu)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={menu} onClose={() => setMenu(false)}>
        <List>
          <nav aria-label="main utility pages">
            <ListItem disablePadding>
              <ListItemButton id="profile" onClick={click}>
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
              <ListItemButton id="single-card" onClick={click}>
                <ListItemIcon>
                  <LooksOne />
                </ListItemIcon>
                <ListItemText>Single Card</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton id='three-card' onClick={click}>
                <ListItemIcon>
                  <Looks3 />
                </ListItemIcon>
                <ListItemText>Three Card</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton id='ten-card' onClick={click}>
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
    </Container>
  );
};

export default Sidebar;
