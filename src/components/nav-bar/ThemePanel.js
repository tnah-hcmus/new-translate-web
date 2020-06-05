import React, {useEffect, useState} from 'react'; 
import {setColor, resetTheme} from '../../actions/theme/theme_action';
import { connect } from 'react-redux';
import {Block} from 'react-color';
const ThemePanel = (props) => {
    const [color, setColor] = useState(props.color !== '' ? props.color : (props.mode !== 'dark' ? 'hsl(222, 53%, 50%);' : '#7b8ed8'));
    const [pickerVisible, setVisible] = useState(false);
    const root = document.documentElement;
    useEffect(() => {
        root.style.setProperty('--color-accent', color);
        root.style.setProperty('--em-font-color', color);
    }, [color])
    const handleColorChange = ({ hex }) => { props.setColor(hex); setColor(hex);}
    return (
        <div className = "nav-item">
            <h5 className="nav-category">
                THEME-PICKER
            </h5>
            <div>
            <button type="button" className="nav-button" onClick={ () => {props.resetTheme(); location.reload(); return false;} } >Reset to default</button>
            <button type="button" className="nav-button" onClick={ () => setVisible(!pickerVisible)} >Pick your theme color </button>
            { pickerVisible && (
            <div style={{ position: 'absolute', left: '150px' }}>
                <Block
                color = {color}
                colors = {['#447740', '#F47373', '#697689', '#7B8ED8', '#257993','#3C64C3', '#CA2B7A', '#ff8a65', '#913EAC']}
                onChangeComplete={ handleColorChange }
                />
            </div>
            )}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { 
      color: state.theme.color,
      mode: state.theme.mode
    };
  }
const mapDispatchToProps = {
    setColor, resetTheme
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemePanel);
