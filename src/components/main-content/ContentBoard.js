import React, {Suspense, lazy} from 'react';
const Section = lazy(() => import(/* webpackChunkName: "Section" */'./Section.js'));
import { connect } from 'react-redux';

//Main-content div, nhận vào danh sách tất cả các tab hiện có -> render thành section, props: tabs (get from Store)

const ContentBoard = (props) => (
    <main className="content js-content">
      {props.tabs.length === 0 && <p className="widget__message"></p>}
      {
        props.tabs.map((tab, index) =>  (
          <Suspense fallback = {<div></div>} key = {index}>
            <Section
              key = {tab.id}
              tab = {tab}
            /> 
          </Suspense>   
        ))
      }
    </main>
)

function mapStateToProps(state) {
  return { 
    tabs: state.tabs
  };
}

export default connect(mapStateToProps, null)(ContentBoard);