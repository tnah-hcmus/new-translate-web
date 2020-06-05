import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
const  PracticeApp = lazy(() => import(/* webpackChunkName: "MainApp" */'../components/PracticeApp'));
import NotFound from '../components/404';
import store from '../store/store';

export default (
<Provider store={store}>
  <BrowserRouter>
  <>
  <Suspense fallback={<div></div>}>
  <Switch>
      <Route path = '/' component = {PracticeApp} exact/>
      <Route component = {NotFound} />
    </Switch>
  </Suspense>
  </>
  </BrowserRouter>
</Provider>
);
