import React, {useContext} from 'react';
import HistoryContext from '../../context/history-context';

//Component tương ứng với 1 tab thuộc category, nhận vào id và tên của tab (title của bài dịch)
const NavButton = (props) => {
    const showPopup = (id, e) => {
        const active = document.getElementsByClassName('show-popup');
        console.log(active);
        if(active.length) {active[0].classList.toggle('show-popup')};
        const parent = document.getElementById(id).parentElement;
        parent.classList.add('show-popup');
    }
    const {state, push } = useContext(HistoryContext);
    return(
    <>
        {props.category !== 'guide' && <button type="button" id={'button-' + props.id} data-section={props.id} className={state.present === props.id ? "nav-button is-selected" : "nav-button"} onClick = {() => push(props.id)}>{props.describe}</button>}
        {props.category === 'guide' && <button type="button" id={'button-' + props.id} onClick = {() => showPopup(props.id)} className="nav-button">{props.describe}</button>}
    </>
    )
}

export default NavButton;
