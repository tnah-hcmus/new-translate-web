import React from 'react';

const GuidePanel = (props) => (
    <div>
        <div className="popup" id={props.id} onClick = {(e) => e.target.parentElement.classList.remove('show-popup')}>
            <iframe width="80%" height="60%" src={props.link} frameBorder="0" allowFullScreen></iframe>
        </div> 
    </div>
);
export default React.memo(GuidePanel);