import React, {Suspense, lazy}  from 'react';
const Nav = lazy(() => import(/* webpackChunkName: "Nav" */'./nav-bar/Nav'));
const ContentBoard = lazy(() => import(/* webpackChunkName: "Content" */'./main-content/ContentBoard'));
const ThemeButton = lazy(() => import(/* webpackChunkName: "ThemeButton" */'./ThemeButton'));
const ToggleNav = lazy(() => import(/* webpackChunkName: "ToggleNav" */'./nav-bar/ToggleNav'));

const PracticeApp = (props) => {
    return (
      <>
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
      </>
    );
}


PracticeApp.defaultProps = {
  title : "RVN",
  focusTitle: "Translator",
  iconHref: "assets/img/icons.svg#icon-windows",
};


export default PracticeApp;

