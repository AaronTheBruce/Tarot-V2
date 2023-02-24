import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { MainPage } from '../pages';
import { Container, Grid } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Container style={{ }}>
      <Header />
      <MainPage />
      <Footer />
    </Container>
  )
}

export default Dashboard