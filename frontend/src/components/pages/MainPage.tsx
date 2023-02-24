import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Sidebar from "../sidebar/Sidebar";

// consider adding an argument for modifying the height
const useStyles = makeStyles({
  layout: {
    display: "flex",
    justifyContent: "center",
  },
});

export const MainPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.layout}>
      <Sidebar />
      Main Pageear
    </Container>
  );
};
