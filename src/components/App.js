import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

const App = () => {
  console.log('App');
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));
