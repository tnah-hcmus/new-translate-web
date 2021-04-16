import React from 'react';
import NavButton from './NavButton';
import {addTab} from '../../actions/tabs/tabs_action';
import {deleteCategoryWCloud} from '../../actions/tabs/category_action'
import { connect } from 'react-redux';

//Component đại diện cho 1 category, bên trong gồm có các button con tương ứng với các tab thuộc category, truyền vào category.name, tabs (lấy những tab có category này)
const NavItem = (props) => {
  //tạo blank tab mới thuộc category
  const newTab = () => {
    const blank = {
        id: null,
        category: props.category,
        title : "Tab này chưa có bài dịch nào",
        iconHref: "assets/img/icons.svg#icon-windows",
        link: '',
        note: '',
        credit: '',
        trans: null,
        info: null 
    }
    props.addTab(blank);
  }
  return (
  <div className = {"nav-item u-category-" + props.category}>
    <h5 className="nav-category">
      {props.category}
      {props.category !== 'guide' && <button className = "category-delete" onClick = {() => props.deleteCategory(props.category)} disabled = {props.tabs.filter((item) => item.category === props.category).length !== 0}>-</button>}
    </h5>
    <div>
      {props.tabs.filter((item) => item.category === props.category).length === 0 && 
        <div style = {{"textAlign": "center"}}>
          <p className="widget__message" style = {{marginLeft: '0'}}>Hiện không có bài dịch nào</p>
        </div>}
      {
        props.tabs.filter((item) => item.category === props.category).map((tabs) => (
          <NavButton
            key={tabs.id}
            id = {tabs.id}
            describe={tabs.title}
            category = {tabs.category}
            activeSection = {props.activeSection}
            setActiveSection = {props.setActiveSection}
          />
        ))
      }
      {props.category !== 'guide' && 
      <button className = "add-button" onClick = {newTab}>
          <img src="assets/img/plus.svg" aria-hidden="true"/>
      </button>
      }
    </div>
  </div>
);
}

function mapStateToProps(state) {
  return { 
    tabs: state.tabs
  };
}
const mapDispatchToProps = {
  addTab, deleteCategory: deleteCategoryWCloud
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(NavItem));
