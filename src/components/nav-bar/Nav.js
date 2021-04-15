import React from 'react';
import { connect } from 'react-redux';
import ThemePanel from './ThemePanel';
import NavItem from './NavItem';
import OutPanel from './LogOut';
//Component cho navbar, props truyền vào: title, focus title (hiện tên), category/tên sub (get từ Store) -> show category
const Nav = (props) => {
  return (
    <div className = {"toggleNav " + (props.isShow ? "nav-show" : "nav-hide")} id = "nav">
      <nav className="nav js-nav">
        <header className="nav-header">
          <h1 className="nav-title">
          <div style = {{display: "inline-block", marginRight: "10px"}}>{props.title} <strong>{props.focusTitle}</strong></div>
          <svg className="nav-header-icon"><use xlinkHref="assets/img/logo.svg#main-stroke"/></svg>
          </h1>
        </header>
        {
          props.category.map((category, index) => {
            if(category.name !== 'guide') return (
              <NavItem
                key={index}
                category={category.name}
                activeSection = {props.activeSection}
                setActiveSection = {props.setActiveSection}
              />
          )})
        }
        {<NavItem key='guide' category='guide'/> /*Move guide section to last section*/}
        <OutPanel/>
        <ThemePanel/>
        <footer className="nav-footer">
          <button type="button" id="button-about" className="nav-footer-button"><a href="https://facebook.com/lcf.star" aria-label="Homepage" target = "_blank">From La Mia with love</a></button>
          <p>Mọi thông tin đóng góp, report bug xin liên lạc với mình qua FB cá nhân ở trên</p>
        </footer>
      </nav>
    </div>
  )
};

function mapStateToProps(state) {
  return { 
    category: state.category
  };
}
export default React.memo(connect(mapStateToProps, null)(Nav));
