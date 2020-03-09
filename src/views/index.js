import React from 'react';
import {
  withRouter,
  Switch, Route, Redirect,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '../GlobalStyles';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import MyAccount from './MyAccount';
import FavoriteScholarship from './FavoriteScholarship';
import Navigation from './NavigationBar';
import Breadcrumb from './Breadcrumb';

const Views = (props) => (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Navigation />
    <Breadcrumb props={props}/>
      <Switch>
            <Redirect exact from="/" to="/Home/MinhaConta/BolsasFavoritas"/>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Home/MinhaConta" component={MyAccount} />
            <Route path="/Home/MinhaConta/BolsasFavoritas" component={FavoriteScholarship} />
      </Switch>
    <Footer />
  </ThemeProvider>
  </>
);


export default withRouter(Views);
