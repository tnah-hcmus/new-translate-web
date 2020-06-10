import React from 'react';

const GuidePanel = (props) => (
    <>
    {
        props.tabs.map((tab, index) =>  (
        <div>
            <div class="popup" id={tab.id} onClick = {(e) => e.target.parentElement.classList.remove('show-popup')}>
                <iframe width="80%" height="60%" src={tab.link} frameborder="0" allowFullScreen center></iframe>
            </div> 
        </div>
        ))
    }
    </>  
);
export default GuidePanel ;