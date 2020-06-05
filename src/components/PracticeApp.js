import React from 'react';
import Nav from './nav-bar/Nav';
import ContentBoard from './main-content/ContentBoard';
import ThemeButton from './ThemeButton';
import ToggleNav from './nav-bar/ToggleNav';

const PracticeApp = (props) => {
    return (
      <>
        <ThemeButton/>
        <Nav
          title = {props.title}
          focusTitle = {props.focusTitle}
        />
        <ToggleNav/>
        <ContentBoard/>
      </>
    );
}


PracticeApp.defaultProps = {
  title : "Reddit",
  focusTitle: "Translator",
  iconHref: "assets/img/icons.svg#icon-windows",
};


export default PracticeApp;

