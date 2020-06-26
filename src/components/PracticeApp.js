import React, {Suspense, lazy}  from 'react';
import HistoryContext from './context/history-context';
import useHistory from '../hook/active';
const Nav = lazy(() => import(/* webpackChunkName: "Nav" */'./nav-bar/Nav'));
const ContentBoard = lazy(() => import(/* webpackChunkName: "Content" */'./main-content/ContentBoard'));
const ThemeButton = lazy(() => import(/* webpackChunkName: "ThemeButton" */'./ThemeButton'));
const ToggleNav = lazy(() => import(/* webpackChunkName: "ToggleNav" */'./nav-bar/ToggleNav'));

const PracticeApp = (props) => {
  const [state, { reset, pop, push }] = useHistory();
    return (
      <>
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
          <ContentBoard/>
        </Suspense>
      </HistoryContext.Provider>
      </>
    );
}


PracticeApp.defaultProps = {
  title : "RVN",
  focusTitle: "Translator",
  iconHref: "assets/img/icons.svg#icon-windows",
};


export default PracticeApp;

