import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PracticeApp from '../components/PracticeApp';
import NotFound from '../components/404';
import store from '../store/store';

export default (
<Provider store={store}>
  <BrowserRouter>
  <>
    <Switch>
      <Route path = '/' component = {PracticeApp} exact/>
      <Route component = {NotFound} />
    </Switch>
  </>
  </BrowserRouter>
</Provider>
);
