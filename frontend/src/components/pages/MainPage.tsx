import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Sidebar from "../sidebar/Sidebar";

// consider adding an argument for modifying the height
const useStyles = makeStyles({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.layout}>
      <Sidebar />
      Raw MainPage
    </Container>
  );
};

export default MainPage;
