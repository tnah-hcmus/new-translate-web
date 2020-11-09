import ReactDOM from 'react-dom';
import React from 'react';
import Router from './router/routes';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import LoadingPage from './components/Loading';
import {firebase} from './firebase/firebase';
import {store} from './store/store';
import { login, logout } from './actions/auth/auth';
import {startSetCredit} from './actions/credit/credit_action';
import {startSetTabs} from './actions/tabs/tabs_action';
import {startSetCategories} from './actions/tabs/category_action';

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<Router/>, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    let initPromise = [];
    initPromise.push(store.dispatch(startSetCredit()));
    initPromise.push(store.dispatch(startSetTabs()));
    initPromise.push(store.dispatch(startSetCategories()));
    Promise.all(initPromise).then(()=>{
      renderApp();
    })
  } else {
    store.dispatch(logout());
    renderApp();
  }
});

serviceWorker.unregister();