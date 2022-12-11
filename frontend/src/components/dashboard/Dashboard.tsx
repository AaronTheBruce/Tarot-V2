import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Page from '../pages/MainPage';
import { Container, Grid } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Container style={{ }}>
      <Header />
      <Page />
      <Footer />
    </Container>
  )
}

export default Dashboard