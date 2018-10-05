/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import App from './components/App';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

// import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// import { syncHistoryWithStore } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
// console.log('index.js');
// const history = createHistory(browserHistory, store);
// console.log('history', history)


// render(
//   <AppContainer>
//     <Root store={store} history={history} />
//   </AppContainer>,
//   document.getElementById('app')
// );

const Index = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<Index />, document.getElementById('app'))