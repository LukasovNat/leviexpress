import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer/index';
import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/reservation">
          <h2>Reservation</h2>
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
