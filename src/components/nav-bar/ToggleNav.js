import React from 'react';
const ToggleNav = (props) => {
    const toggleNav = (e) => {
    let nav = document.getElementById("nav");
      let toggle = document.getElementById("toggle-nav-bar");
      
      nav.classList.toggle("nav-hide");
      nav.classList.toggle("nav-show");
      let inner = toggle.getElementsByTagName("span")[0].innerHTML;
      toggle.getElementsByTagName("span")[0].innerHTML = (inner === "Expand") ? "Close" : "Expand";
      toggle.classList.toggle("toggle-nav-bar");
      toggle.classList.toggle("toggle-nav-bar-show");
    }
    return (
        <button id = "toggle-nav-bar" className = "toggle-nav-bar-show" onClick = {toggleNav}><span>Close</span></button>
    );
}
export default ToggleNav;