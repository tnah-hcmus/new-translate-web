//import './wdyr'; 
import ReactDOM from 'react-dom';
import React from 'react';
import Router from './router/routes';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import LoadingPage from './components/Loading';
import {firebase, database} from './firebase/firebase';
import {store} from './store/store';
import { login, logout } from './actions/auth/auth';
import {startSetCredit} from './actions/credit/credit_action';
import {startSetTabs} from './actions/tabs/tabs_action';
import {startSetCategories} from './actions/tabs/category_action';

let hasRendered = false;
const getBlockedList = () => {
  const path = `blocked`;
  return database.readData({path})
        .then((snapshot) => {
          return snapshot ? Object.keys(snapshot).map((key) => snapshot[key]) : [];
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
}
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<Router/>, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    const blockedList = await getBlockedList();
    if(blockedList.includes(user.uid)) {
      store.dispatch(logout());
      renderApp();
    } else {
      store.dispatch(login(user.uid));
      let initPromise = [
        store.dispatch(startSetCredit()),
        store.dispatch(startSetTabs()),
        store.dispatch(startSetCategories())
      ];
      Promise.all(initPromise).then(()=>{
        renderApp();
      })
    }
  } else {
    store.dispatch(logout());
    renderApp();
  }
});

serviceWorker.unregister();