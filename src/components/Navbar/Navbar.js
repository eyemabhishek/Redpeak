import React, { Component } from "react";
import "./Navbar.css";
import { Menu } from "./Menuitem"


class Navbar extends Component {
  state = { isClicked: false };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    return (
      <div className="nav-items">
        <h1 className="nav-logo">
        <a href="#"> <img src="images/logo.png" alt="logo"/>  </a>
        </h1>

        <div className="hamburger-icon" onClick={this.handleClick}>
          <i
            className={this.state.isClicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
