import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
const  PracticeApp = lazy(() => import(/* webpackChunkName: "MainApp" */'../components/PracticeApp'));
import NotFound from '../components/404';
import {store, persistor} from '../store/store';
import { PersistGate } from 'redux-persist/integration/react'


export default (
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
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
  </PersistGate>
</Provider>
);
