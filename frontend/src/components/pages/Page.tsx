import React from "react";
import {makeStyles} from "@material-ui/core";
import { Container } from "@material-ui/core";
import Sidebar from "../sidebar/Sidebar";

// consider adding an argument for modifying the height
const useStyles = makeStyles({
  layout: {
    display: 'flex',
    alignItems: 'center',
    height: '90vh',
  }
});

const Page = () => {
  const classes = useStyles();
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Sidebar />
      Raw Page
      </Container>
  );
};

export default Page;
