import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './App'

import './index.css'
import dva from 'dva'
import { createHashHistory } from 'history';
const history = createHashHistory()
const app = dva({history})

function RouterConfig({ history }) {
 
  return (
    <Router history={history}>
      <Switch>
        <Router path="/" exact component={App}/>
      </Switch>
    </Router>
  );
}

app.router(RouterConfig)
app.start('#root');

 
