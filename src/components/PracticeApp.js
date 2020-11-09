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
  const [popover, setPopover] = useState(false);
  const selectionRef = useRef(null); //ref for highlight functional
  const popoverRef = useRef(null)

  return (
    <div ref={selectionRef} className = "wrap">
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
          setPopover = {setPopover}
          popoverRef = {popoverRef}
        />
      </Suspense>
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

