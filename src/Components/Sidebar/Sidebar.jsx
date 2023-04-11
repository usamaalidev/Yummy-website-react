import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import logo from "../../assets/images/logo.png";

export default function Sidebar() {
  let sidebar = useRef(null);
  let innerSideBar = useRef(null);
  let menuIcon = useRef(null);

  function changeStatus() {
    let position = window
      .getComputedStyle(sidebar.current)
      .getPropertyValue("left");

    if (position == "0px") {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  function closeSidebar() {
    let width = innerSideBar.current.offsetWidth;
    sidebar.current.style.left = `-${width}px`;
    menuIcon.current.classList.replace("fa-xmark", "fa-bars");
  }

  function openSidebar() {
    sidebar.current.style.left = `0px`;
    menuIcon.current.classList.replace("fa-bars", "fa-xmark");
  }

  return (
    <>
      <nav ref={sidebar} className={`${style["main-nav"]} position-fixed`}>
        <div
          ref={innerSideBar}
          className="d-flex flex-column justify-content-between p-3"
        >
          <ul className="list-unstyled">
            <li className="p-0 mb-1">
              <NavLink
                to="/search"
                className="w-100 d-inline-block p-2"
                onClick={closeSidebar}
              >
                Search
              </NavLink>
            </li>
            <li className="p-0 mb-1">
              <NavLink
                to="/categories"
                className="w-100 d-inline-block p-2"
                onClick={closeSidebar}
              >
                Categories
              </NavLink>
            </li>
            <li className="p-0 mb-1">
              <NavLink
                to="/area"
                className="w-100 d-inline-block p-2"
                onClick={closeSidebar}
              >
                Area
              </NavLink>
            </li>
            <li className="p-0 mb-1">
              <NavLink
                to="/ingredients"
                className="w-100 d-inline-block p-2"
                onClick={closeSidebar}
              >
                Ingredients
              </NavLink>
            </li>
            <li className="p-0 mb-1">
              <NavLink
                to="/contact"
                className="w-100 d-inline-block p-2"
                onClick={closeSidebar}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="copyright">
            <div className="social-icons">
              <a href="https://facebook.com">
                <i className="fa-brands fa-facebook-f p-2 pointer"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fa-brands fa-twitter p-2 pointer"></i>
              </a>
              <a href="https://youtube.com">
                <i className="fa-brands fa-youtube p-2 pointer"></i>
              </a>
            </div>
            <p>Copyright &copy; 2023 All Rights Reserved.</p>
          </div>
        </div>
        <div className="text-black px-2 py-3 d-flex flex-column justify-content-between align-items-center">
          <NavLink className="logo" to="/" onClick={closeSidebar}>
            <img
              src={logo}
              className={`${style.logo} pointer`}
              alt="Yummy Logo"
            />
          </NavLink>
          <i
            className="fa-solid fa-bars fa-2x pointer"
            onClick={changeStatus}
            ref={menuIcon}
          ></i>
          <div className="icons d-flex flex-column gap-2">
            <i className="fa-solid fa-earth-americas pointer"></i>
            <i className="fa-solid fa-share-nodes pointer"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
