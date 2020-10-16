import React from 'react'; 
import {connect} from 'react-redux';
import { startLogout } from '../../actions/auth/auth';


const OutPanel = ({logout}) => {
    return (
        <div className = "nav-item">
            <h5 className="nav-category">
                SESSIONS
            </h5>
            <div>
            <button type="button" className="nav-button" onClick={logout} >Logout</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(startLogout())
  });
  
  export default connect(undefined, mapDispatchToProps)(OutPanel);
