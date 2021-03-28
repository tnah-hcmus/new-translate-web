import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../components/LoginPage';
import PracticeApp from '../components/PracticeApp';
import NotFound from '../components/404'

const PrivateRoutes = props => {
  if (props.isAuthenticated) {
    return (
      <Switch>
            <Route path="/" component={PracticeApp} exact/>
            <Route path="/404" component={NotFound} />         
            <Redirect to="/404" />
      </Switch>
    );
  } else {
    return (
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/404" component={LoginPage} />         
            <Redirect to="/404" />
        </Switch>
    );
  }
};


const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default React.memo(connect(mapStateToProps)(PrivateRoutes));