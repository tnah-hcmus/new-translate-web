import React, {Suspense, lazy, useEffect, useState} from 'react';
const Section = lazy(() => import(/* webpackChunkName: "Section" */'./section/Section.js'));
const GuidePanel = lazy(() => import(/* webpackChunkName: "Guide" */'./GuidePanel.js'));
import { connect } from 'react-redux';
import translate from './trans-button/translate';

//Main-content div, nhận vào danh sách tất cả các tab hiện có -> render thành section, props: tabs (get from Store)

const ContentBoard = (props) => {
  const getSelectionText = () => {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
  }
  const [helper, setHelper] = useState(false);
  const setGoogleHelper = () => {
    if(helper) {
      document.onmouseup = null;
      props.setPopover(false);
    }
    else {
      props.setPopover(true);
      document.onmouseup = function() {
        const sourceText = getSelectionText();
        const popover = document.getElementById("popover");
        if (sourceText === "") {
          if(popover) popover.style.opacity = 0;
        }
        else {
          if(popover) translate(sourceText).then((result) => popover.innerHTML = result.resultText);
        }
      };
    }
  }
  const messageWorker = (e) => {
      if (e.data === 'Worker done' || e.data === 'Download done' || e.data === 'Load worker'  || e.data === 'Loading' || e.data === 'Loaded') {
          let section = document.getElementsByClassName("is-shown")[0];
          let button = section.getElementsByClassName("download")[0];
          switch(e.data) {
              case 'Worker done':
                  button.innerHTML = 'Downloaded'
                  break;
              case 'Download done':
                  button.innerHTML = 'Combining'
                  break;
              case 'Load worker':
                  button.innerHTML = 'Loading service worker'
                  break;
              case 'Loading':
                  button.innerHTML = 'Loading'
                  break;
              case 'Loaded':
                  button.innerHTML = 'Downloading'
                  break;
              default: 
                  break;
          }
    };
  }
  useEffect(() => {
    window.addEventListener('message', messageWorker);
    return () => {
      window.removeEventListener('message', messageWorker);
      document.onmouseup = null;  
    };
  }, []);
  return (
  <>
    <main className="content js-content">
      {props.tabs.length === 0 && <p className="widget__message"></p>}
      {
        props.tabs.map((tab, index) =>  {
          if(tab.category !== 'guide') return (
          <Suspense fallback = {<div></div>} key = {index}>
            <Section
              key = {tab.id}
              tab = {tab}
              helper = {helper}
              uuid = {props.uuid}
              setGoogleHelper = {setGoogleHelper}
              setHelper = {setHelper}
            /> 
          </Suspense>   
          )
          else return (
            <Suspense fallback = {<div></div>} key = {index}>
            <GuidePanel
              key = {tab.id}
              id = {tab.id}
              link = {tab.link}
            /> 
            </Suspense>   
          )
        })
      }
    </main>
  </>
  )
}

function mapStateToProps(state) {
  return { 
    tabs: state.tabs
  };
}

export default connect(mapStateToProps, null)(ContentBoard);