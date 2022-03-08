import React, {Fragment} from 'react';
import { Route } from "react-router-dom";
import './App.css';

import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Fragment>
  );
}

export default App;
