import React from 'react';
import {
  withRouter,
  Switch, Route, Redirect,
} from 'react-router-dom';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { getPersistor } from '@rematch/persist';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '../GlobalStyles';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import MyAccount from './MyAccount';
import FavoriteScholarship from './FavoriteScholarship';
import Navigation from './NavigationBar';
import Breadcrumb from './Breadcrumb';

const Views = (props) => {
  const persistor = getPersistor();

  return (
    <>
  <ThemeProvider theme={theme}>
    <PersistGate persistor={persistor}>
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
      </PersistGate>
    </ThemeProvider>
    </>
  );
};


export default withRouter(Views);
