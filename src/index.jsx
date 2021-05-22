import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer/index';
import './style.css';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
