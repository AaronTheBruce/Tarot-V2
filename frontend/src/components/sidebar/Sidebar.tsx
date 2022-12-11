import React, { useCallback, useMemo, useState } from "react";
import { BrowserRouter, Route, Path } from "react-router-dom";
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
import { useRouter } from "../../hooks";

const Sidebar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback((m: boolean) => setMenu(!m), []);

  const click = useCallback((view: string) => {
    toggleMenu(true);
    router.navigate(`/${view}`, undefined);
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
              <ListItemButton  onClick={() => click('profile')}>
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
              <ListItemButton onClick={() => click('single-card')}>
                <ListItemIcon>
                  <LooksOne />
                </ListItemIcon>
                <ListItemText>Single Card</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => click('three-card')}>
                <ListItemIcon>
                  <Looks3 />
                </ListItemIcon>
                <ListItemText>Three Card</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => click('ten-card')}>
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
