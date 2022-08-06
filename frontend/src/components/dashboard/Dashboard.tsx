import React from 'react';
import Header from '../header/Header';
import { Grid } from '@material-ui/core';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          Deck Exploration
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          3 Card Spread
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          7 Card Spread
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          10 Card Spread
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard