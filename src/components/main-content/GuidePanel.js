import React from 'react';

const GuidePanel = (props) => (
    <div>
        <div class="popup" id={props.id} onClick = {(e) => e.target.parentElement.classList.remove('show-popup')}>
            <iframe width="80%" height="60%" src={props.link} frameborder="0" allowFullScreen center></iframe>
        </div> 
    </div>
);
export default GuidePanel ;