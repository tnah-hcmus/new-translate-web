import React from 'react';
const ToggleNav = (props) => {
    const toggleNav = (e) => {
      props.setShowNav(!props.isNavShow)
    }
    return (
      <button 
        id = "toggle-nav-bar" 
        className = {props.isNavShow ? "toggle-nav-bar-show" : "toggle-nav-bar"}  
        onClick = {toggleNav}
      >
        <span>{props.isNavShow ? "Close" : "Expand"}</span>
      </button>
    );
}
export default React.memo(ToggleNav);