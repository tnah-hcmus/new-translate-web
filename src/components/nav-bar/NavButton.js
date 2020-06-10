import React from 'react';


//Component tương ứng với 1 tab thuộc category, nhận vào id và tên của tab (title của bài dịch)
const NavButton = (props) => {
    const showPopup = (id, e) => {
        const parent = document.getElementById(id).parentElement;
        parent.classList.add('show-popup');
    }
    return(
    <>
        {props.category !== 'guide' && <button type="button" id={'button-' + props.id} data-section={props.id} className="nav-button">{props.describe}</button>}
        {props.category === 'guide' && <button type="button" id={'button-' + props.id} onClick = {() => showPopup(props.id)} className="nav-button">{props.describe}</button>}
    </>
    )
}

export default NavButton;
