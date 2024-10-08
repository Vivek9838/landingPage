import React, { useEffect, useState,useRef } from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [hideMenu, setHideMenu] = useState(false);
  const humBurgerMenuRef = useRef(null); 

 
  const handleClickOutside = (event) => {
    if (humBurgerMenuRef.current && !humBurgerMenuRef.current.contains(event.target)) {
      setHideMenu(true); 
  };
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active_link : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? style.active_link : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? style.active_link : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? style.active_link : ""
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rider"
                className={({ isActive }) =>
                  isActive ? style.active_link : ""
                }
              >
                For Riders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive ? style.active_link : ""
                }
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.humBurgerMenu}>
          <i
            class="fa-solid fa-bars"
            onClick={()=>setHideMenu(!hideMenu)}
          ></i>
          {!hideMenu ? (
            <div className={style.humbergerShowMenu} ref={humBurgerMenuRef}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? style.active_link : ""
                    }
                    onClick={()=>setHideMenu(true)}
                  >
                    Home
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? style.active_link : ""
                    }
                    onClick={()=>setHideMenu(true)}
                  >
                    About Us
                  </NavLink>
                </li>{" "}
                <hr />
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? style.active_link : ""
                    }
                    onClick={()=>setHideMenu(true)}
                  >
                    Contact Us
                  </NavLink>
                </li>{" "}
                <hr />
                <li>
                  <NavLink
                    NavLink
                    to="/service"
                    className={({ isActive }) =>
                      isActive ? style.active_link : ""
                    }
                    onClick={()=>setHideMenu(true)}
                  >
                    Service Us
                  </NavLink>
                </li>{" "}
                <hr />
                <li>
                  <NavLink
                    to="/rider"
                    className={({ isActive }) =>
                      isActive ? style.active_link : ""
                    }
                    onClick={()=>setHideMenu(true)}
                  >
                    For Riders
                  </NavLink>
                </li>{" "}
                <hr />
                <li>
                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive ? style.active_link : ""
                    }
                    onClick={()=>setHideMenu(true)}
                  >
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : ""}
        </div>
      </div>
      <hr className={style.horizontal} />
    </div>
  );
}

export default Navbar;
