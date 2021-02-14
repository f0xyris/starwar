import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import StarwarService from './services/starwar-service';
import { StarwarServiceProvider } from './components/starwar-service-context';

import store from './store';

const starwarService = new StarwarService();


ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <StarwarServiceProvider value={starwarService}>
          <Router>
            <App />
          </Router>
        </StarwarServiceProvider>
      </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
  );

