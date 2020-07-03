import React, {Suspense, lazy, useRef, useState}  from 'react';
import HistoryContext from '../context/history-context';
import useHistory from '../hook/active';
const Nav = lazy(() => import(/* webpackChunkName: "Nav" */'./nav-bar/Nav'));
const ContentBoard = lazy(() => import(/* webpackChunkName: "Content" */'./main-content/ContentBoard'));
const ThemeButton = lazy(() => import(/* webpackChunkName: "ThemeButton" */'./ThemeButton'));
const ToggleNav = lazy(() => import(/* webpackChunkName: "ToggleNav" */'./nav-bar/ToggleNav'));
import Popover from 'react-text-selection-popover';
import placeRightBelow from 'react-text-selection-popover/lib/placeRightBelow'; 

const PracticeApp = (props) => {
  const [state, { reset, pop, push }] = useHistory();
  const ref = useRef(null);
  const [popover, setPopover] = useState(false);
  let uuid;
  const serializedState = localStorage.getItem('rvn-uuid');
  if (serializedState === null) {
      location.reload();
  }
  else uuid = JSON.parse(serializedState);
    return (
      <div ref={ref} className = "wrap">
      <HistoryContext.Provider value = {{state: state, reset: reset, push: push, pop: pop }}>
        <Suspense fallback={<div></div>}>
         <ThemeButton/>
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Nav
            title = {props.title}
            focusTitle = {props.focusTitle}
          />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <ToggleNav/>
        </Suspense>
        <Suspense fallback={<div></div>}>
          <ContentBoard
            uuid = {uuid}
            setPopover = {setPopover}
          />
        </Suspense>
          <Popover 
        selectionRef={ref} 
        isOpen={popover}
        onTextSelect={() => { if(document.getElementById("popover")) document.getElementById("popover").style.opacity = 1; }}
        onTextUnselect={() => { if(document.getElementById("popover")) document.getElementById("popover").style.opacity = 0; }}
        placementStrategy={placeRightBelow}
        style = {{position: "absolute"}}>
        <div className = "pop-over" id = "popover">
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


export default PracticeApp;

