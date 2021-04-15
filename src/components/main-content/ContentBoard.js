import React, {Suspense, lazy, useEffect, useState, useContext} from 'react';
const Section = lazy(() => import(/* webpackChunkName: "Section" */'./section/Section.js'));
const GuidePanel = lazy(() => import(/* webpackChunkName: "Guide" */'./GuidePanel.js'));
import { connect } from 'react-redux';
import translate from './translate/translate';
//Function for select and translate feature
const getSelectionText = () => {
  let text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
  }
  return text;
}
const endSelect = (ref) => {
  const sourceText = getSelectionText();
  if (sourceText === "") {
    if(ref) ref.style.opacity = 0;
  }
  else {
      if(ref) translate(sourceText)
              .then((result) => ref.innerHTML = result.resultText)
              .catch((err) => {console.log(err); ref.innerHTML = 'Có lỗi xảy ra trong quá trình translate'})
  }
}
//Function for worker ffmpeg combine and download video feature
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
//Main-content div, nhận vào danh sách tất cả các tab hiện có -> render thành section, props: tabs (get from Store)
const ContentBoard = (props) => {
  const [helper, setHelper] = useState(false);
  const [listSection, setListSection] = useState(props.tabs);
  const setGoogleHelper = () => {
    if(helper) {
      document.onselectionchange = null;
      props.setPopover(false);
    }
    else {
      props.setPopover(true);
      let selectionEndTimeout = null;
      const selecting = () => {
        // wait 500 ms after the last selection change event
        if (selectionEndTimeout) {
          clearTimeout(selectionEndTimeout);
        }
        selectionEndTimeout = setTimeout(() => {
          endSelect(props.popoverRef.current);
        }, 500);
      }
      document.onselectionchange = selecting;
    }
  }
  useEffect(() => {
    window.addEventListener('message', messageWorker);
    return () => {
      window.removeEventListener('message', messageWorker);
      document.onselectionchange = null; 
    };
  }, []);
  useEffect(() => {
    const list = props.tabs.filter((tab) => {
      if(tab.category === 'guide') return true;
      else {
        if(checkIsView(tab.id, tab.category)) return true;
      }
    })
    setListSection(list);
  }, [props.listSection, props.activeSection])
  const checkIsView = (id, category) => {
    if(props.listSection.size == 0) {
      if(category == 'blank') return true;
    } 
    if(props.listSection.has(id)) return true;
    if(props.activeSection == id) return true;
    return false;
  }
  return (
    <main className="content js-content">
      {props.tabs.length === 0 && <p className="widget__message"></p>}
      {
        listSection.map((tab, index) =>  {
          if(tab.category !== 'guide') 
            return (<Suspense fallback = {<div></div>} key = {index}>
              <Section
                key = {tab.id}
                tab = {tab}
                helper = {helper}
                activeSection = {props.activeSection || props.tabs.find(item => item.category == 'blank').id}
                setActiveSection = {props.setActiveSection}
                setGoogleHelper = {setGoogleHelper}
                setHelper = {setHelper}
              /> 
            </Suspense>)
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
  )
}

function mapStateToProps(state) {
  return { 
    tabs: state.tabs
  };
}

export default React.memo(connect(mapStateToProps, null)(ContentBoard));