import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle } from '../actions/auth/auth';

export const LoginPage = ({ google }) => {
    return (
  <div>
    <button onClick={google}>Login</button>
  </div>
);}

const mapDispatchToProps = (dispatch) => ({
  google: () => dispatch(startLoginGoogle())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
