import { Link } from "react-router-dom";
import '../styles/Nav.css';
import logo from "../assets/logo.svg";

import React from 'react'

export default function Nav() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-logo">
          <img className="nav-logo-img" src={logo} alt="" />
        </div>
        <div className="nav-links">
            <Link to = "/Home"> Home </Link>
            <Link to ="/About"> About </Link>
            <Link to ="/ContactUs"> Contact US</Link>
        </div>
      </div>
    </div>
  )
}

