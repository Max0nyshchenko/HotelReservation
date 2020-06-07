import React, { Component } from "react";
import logo from "../images/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center"></div>
        <div className="nav-header"></div>
      </nav>
    );
  }
}
