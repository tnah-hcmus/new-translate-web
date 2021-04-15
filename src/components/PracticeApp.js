import React, {Suspense, lazy, useRef, useState}  from 'react';
import HistoryContext from '../context/history-context';
import useHistory from '../hook/active';
import Nav from './nav-bar/Nav';
import ContentBoard from './main-content/ContentBoard';
import ThemeButton from './ThemeButton';
import ToggleNav from './nav-bar/ToggleNav';
import Popover from 'react-text-selection-popover';
import placeRightBelow from 'react-text-selection-popover/lib/placeRightBelow'; 

const PracticeApp = (props) => {
  const [state, { reset, push }] = useHistory();
  const [popover, setPopover] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const selectionRef = useRef(null); //ref for highlight functional
  const popoverRef = useRef(null)

  return (
    <div ref={selectionRef} className = "wrap">
      <HistoryContext.Provider value = {{state: state, reset: reset, push: push }}>
        <ThemeButton/>
        <Nav
          title = {props.title}
          focusTitle = {props.focusTitle}
          isShow = {showNav}
          activeSection = {activeSection || state.present}
          setActiveSection = {setActiveSection}
        />
        <ToggleNav setShowNav = {setShowNav} isNavShow = {showNav}/>
        <ContentBoard
          setPopover = {setPopover}
          listSection = {state.history}
          popoverRef = {popoverRef}
          activeSection = {activeSection || state.present}
          setActiveSection = {setActiveSection}
        />
        <Popover 
        selectionRef={selectionRef} 
        isOpen={popover}
        onTextSelect={() => { if(popoverRef.current) popoverRef.current.style.opacity = 1} }
        onTextUnselect={() => {  if(popoverRef.current) {popoverRef.current.style.opacity = 0; popoverRef.current.innerHTML = "Sẵn sàng dịch"}}}
        placementStrategy={placeRightBelow}
        style = {{position: "absolute"}}>
          <div className = "pop-over" id = "popover" ref = {popoverRef}>
            Sẵn sàng dịch
          </div>
        </Popover>
      </HistoryContext.Provider>
    </div>
  );
}


PracticeApp.defaultProps = {
  title : "RVN",
  focusTitle: "Translator",
  iconHref: "assets/img/icons.svg#icon-windows",
};


export default React.memo(PracticeApp);

