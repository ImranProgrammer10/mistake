import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
    return (
        <div className="MenuBar-container fixed-top mt-4" style={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                    {/* <a href="#" className="items"><li>Home</li></a>
                    <a href="#" className="items"><li>Home</li></a>
                    <a href="#" className="items"><li>Home</li></a>
                    <a href="#" className="items"><li>Home</li></a>
                    <a href="#" className="items"><li>Home</li></a> */}

                    <NavLink exact activeClassName='menu_active' className="items active" aria-current="page" to="/">
                    <li>Home</li>
                  </NavLink>
                  
                  <NavLink to="/services" exact activeClassName='menu_active' className="items">
                    <li>Services</li>
                  </NavLink>
                  <NavLink to="/pricing" exact activeClassName='menu_active' className="items">
                    <li>Pricing</li>
                  </NavLink>
                  <NavLink to="/about" exact activeClassName='menu_active' className="items">
                    <li>About us</li>
                  </NavLink>
                  <NavLink to="contact" exact activeClassName='menu_active' className="items">
                    <li>Contact us</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuBar;