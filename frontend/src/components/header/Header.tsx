import React from "react";
import { Container} from "@mui/material";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '1rem'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h3>Header Component</h3>
    </Container>
  );
};

export default Header;
