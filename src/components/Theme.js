import React, {useEffect} from 'react';
import {connect} from 'redux';
const ThemeButton = (props) => {
    useEffect(() => {
    }, [])
    const switchTheme = (e) => {
    const root = document.documentElement;
    if(e.target.checked) {
        root.style.setProperty('--main-color', '#1e1e1e')
        root.style.setProperty('--bg-color', '--color-accent')
        root.style.setProperty('--font-color', 'white')
        root.style.setProperty('--em-font-color', '#7b8ed8')
        root.style.setProperty('--link-color', '#ffffff')
        root.style.setProperty('--color-accent', '#7b8ed8')
        root.style.setProperty('--border-color', 'hsl(0,0%,35%)')
        root.style.setProperty('--title-color', '#f2f3f5')
        root.style.setProperty('--text', '#f2f3f5')
        root.style.setProperty('--bg-input-color', '#3d4247')
    }
    else {
        root.style.setProperty('--main-color', '#ffffff')
        root.style.setProperty('--bg-color', 'hsl(0,0%,96%)')
        root.style.setProperty('--font-color', 'hsl(0,0%,22%)')
        root.style.setProperty('--em-font-color', 'hsl(0,0%,11%)')
        root.style.setProperty('--link-color', 'hsl(0,0%,22%)')
        root.style.setProperty('--color-accent', 'hsl(222, 53%, 50%)')
        root.style.setProperty('--border-color', 'hsl(0,0%,88%)')
        root.style.setProperty('--title-color', 'hsl(0,0%,44%)')
        root.style.setProperty('--text', 'hsl(0,0%,11%)')
        root.style.setProperty('--bg-input-color', 'hsl(0,0%,96%)')
    }
    }
    return (
      <input className="toggle-dark-mode" type="checkbox" onClick = {switchTheme} />
    );
}
export default ThemeButton;