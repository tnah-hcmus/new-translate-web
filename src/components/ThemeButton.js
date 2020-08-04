import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {setMode} from '../actions/theme/theme_action';
//cssText for dark/light mode
const theme = {
    "light": "--main-color:#ffffff; --bg-color:hsl(0,0%,96%); --font-color:hsl(0,0%,22%); --link-color:hsl(0,0%,22%); --border-color:hsl(0,0%,88%); --title-color:hsl(0,0%,44%); --text:hsl(0,0%,11%); --bg-input-color:hsl(0,0%,96%); --nav-hover:hsla(0,0%,0%,.1); --overlay:rgba(255, 255, 255, 0.75); --alert-overlay:rgba(255, 255, 255, 0.9);",
    "dark": "--main-color:#1e1e1e; --bg-color:--color-accent; --font-color:white; --link-color:#ffffff; --border-color:hsl(0,0%,35%); --title-color:#f2f3f5; --text:#f2f3f5; --bg-input-color:#3d4247; --nav-hover:hsla(0,0%,22%,.9); --overlay:rgba(64, 61, 61, 0.75); --alert-overlay:rgba(0, 0, 0, 0.9);"
}

const ThemeButton = (props) => {
    const toggleButton = useRef(null);
    useEffect(() => {
        //setProperty on component mount
        if(props.mode === 'dark') {
            toggleButton.current.checked = true;
            switchTheme(null, "dark");
        }
    }, [])
    const switchTheme = (e, mode) => {
        //prepare variable for switch mode
        const root = document.documentElement;
        if(e) {
            mode = e.target.checked ? "dark" : "light";
            props.setMode(mode); //only dispatch set theme action onchange (not on component mount)
        }
        const defaultColor = mode === "dark" ? '#7b8ed8' : 'hsl(222, 53%, 50%)';
        const color = props.color || defaultColor; 
        //set css variable use cssText and setProperty
        root.style.cssText = theme[mode];
        root.style.setProperty('--color-accent', color);
        root.style.setProperty('--em-font-color', color);
    }
    return (
      <input className="toggle-dark-mode" type="checkbox" onClick = {switchTheme} ref = {toggleButton} />
    );
}
function mapStateToProps(state) {
    return { 
      mode: state.theme.mode,
      color: state.theme.color
    };
  }
const mapDispatchToProps = {
    setMode
}
//Wrap by React memo to prevent rerender when new props equal
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ThemeButton));