import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import demDashboard from './components/Dashboard/demDashboard';

import Nav from './components/Nav';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
          <Route path="/" component={Login} />         
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard2" component={demDashboard} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
