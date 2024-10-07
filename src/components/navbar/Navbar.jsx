import React from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.logo}>
          {/* <img src="" alt="logo image" /> */}
          <h2>Logo</h2>
        </div>
        <div className={style.navbar_tag}>
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=> isActive ? style.active_link : ""} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=> isActive ? style.active_link : ""}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive})=> isActive ? style.active_link : ""}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/service" className={({isActive})=> isActive ? style.active_link : ""}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/rider" className={({isActive})=> isActive ? style.active_link : ""}>For Riders</NavLink>
            </li>
            <li>
              <NavLink to="/career" className={({isActive})=> isActive ? style.active_link : ""}>Careers</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className={style.horizontal} />
    </div>
  );
}

export default Navbar;
