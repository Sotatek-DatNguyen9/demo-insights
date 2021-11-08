/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar-inner-container">
      <span className="navbar-icon">
        <a class="" href="#">
          <img
            src="https://www.nodeflair.com/assets/logos/nodeflair_horizontal-ba1df3d92a0a4ba2f466b2e7ed34360c3259f808ad36b42165feaafa6611c344.svg"
            alt="image"
          ></img>
        </a>
      </span>
      <span
        class="navbar-clickable-options-container-left show-only-on-large"
        id=""
      >
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
        <a class="nav-link-item" href="#">
          <span class="navbar-clickable-option">Home</span>
        </a>
      </span>
      <span className="navbar-clickable-options-container-right show-only-on-large">
        <div className="contribute-dropdown">
          <div className="contribute-button">
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              + Contribute
              <i
                className="fas fa-chevron-down fa-xs"
                style={{
                  color: "#3a3a3a",
                  marginLeft: "7px",
                  paddingTop: "3px",
                  width: "2px",
                }}
              />
            </div>
            <div className="dropdown-content">
              <a
                className="dropdown-item"
                href="/salaries/addsalary?utm_campaign=navbar_contribute&utm_medium=button&utm_source=nodeflair"
              >
                Add Salary
              </a>
              <a
                className="dropdown-item"
                href="/reviews/new?utm_campaign=navbar_contribute&utm_medium=button&utm_source=nodeflair"
              >
                Add Review
              </a>
            </div>
          </div>
        </div>
        <a href="/users/sign_in">
          <span className="navbar-clickable-option">
            <i className="far fa-user" style={{ padding: "3px" }} />
            Sign In
          </span>
        </a>
      </span>
    </div>
  );
}

export default Navbar;
