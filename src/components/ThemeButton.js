import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {setMode} from '../actions/theme/theme_action';
const ThemeButton = (props) => {
    const [mode, setMode] = useState(props.mode);
    useEffect(() => {
        if(props.mode === 'dark') {
            document.getElementsByClassName('toggle-dark-mode')[0].click();
        }
    }, [])
    const switchTheme = (e) => {
    const root = document.documentElement;
    if(e.target.checked) {
        props.setMode('dark');
        setMode('dark');
        root.style.setProperty('--main-color', '#1e1e1e')
        root.style.setProperty('--bg-color', '--color-accent')
        root.style.setProperty('--font-color', 'white')
        root.style.setProperty('--link-color', '#ffffff')
        root.style.setProperty('--border-color', 'hsl(0,0%,35%)')
        root.style.setProperty('--title-color', '#f2f3f5')
        root.style.setProperty('--text', '#f2f3f5')
        root.style.setProperty('--bg-input-color', '#3d4247')
        root.style.setProperty('--nav-hover', 'hsla(0,0%,22%,.9)')
        root.style.setProperty('--overlay', 'rgba(64, 61, 61, 0.75)')
        root.style.setProperty('--alert-overlay', 'rgba(0, 0, 0, 0.9)')
        if(props.color === '') {
            root.style.setProperty('--color-accent', '#7b8ed8')
            root.style.setProperty('--em-font-color', '#7b8ed8')
        }
    }
    else {
        props.setMode('light');
        setMode('light');
        root.style.setProperty('--main-color', '#ffffff')
        root.style.setProperty('--bg-color', 'hsl(0,0%,96%)')
        root.style.setProperty('--font-color', 'hsl(0,0%,22%)')
        root.style.setProperty('--link-color', 'hsl(0,0%,22%)')
        root.style.setProperty('--border-color', 'hsl(0,0%,88%)')
        root.style.setProperty('--title-color', 'hsl(0,0%,44%)')
        root.style.setProperty('--text', 'hsl(0,0%,11%)')
        root.style.setProperty('--bg-input-color', 'hsl(0,0%,96%)')
        root.style.setProperty('--nav-hover', 'hsla(0,0%,0%,.1)')
        root.style.setProperty('--overlay', 'rgba(255, 255, 255, 0.75)')
        root.style.setProperty('--alert-overlay', 'rgba(255, 255, 255, 0.9)')
        if(props.color === '') {
            root.style.setProperty('--color-accent', 'hsl(222, 53%, 50%)')
            root.style.setProperty('--em-font-color', 'hsl(222, 53%, 50%)')
        }
    }
    }
    return (
      <input className="toggle-dark-mode" type="checkbox" onClick = {switchTheme} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);