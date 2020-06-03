import React from 'react';
import Section from './Section.js';
import { connect } from 'react-redux';

//Main-content div, nhận vào danh sách tất cả các tab hiện có -> render thành section, props: tabs (get from Store)

const ContentBoard = (props) => (
    <main className="content js-content">
      {props.tabs.length === 0 && <p className="widget__message"></p>}
      {
        props.tabs.map((tab, index) =>  (
          <Section
            key = {tab.id}
            tab = {tab}
          />      
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