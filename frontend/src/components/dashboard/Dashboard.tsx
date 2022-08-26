import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Page from '../pages/Page';
import { Container, Grid } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Container style={{height: '100vh', width: '100vw'}}>
      <Header />
      <Page />
      <Footer />
    </Container>
  )
}

export default Dashboard