import React from 'react'
import PropTypes from 'prop-types'
import '../style/alertStyle.css';


export default function Navbar(props) {
  return (
    <div className='nav-bar'>
       <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand ">{props.navTitle}</a>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">{props.searchBtn}</button>
        </form>
        </div>
  </nav>
    </div>
  )
}


Navbar.propTypes = {
    navTitle: PropTypes.string.isRequired,
    searchBtn: PropTypes.string
}

Navbar.defaultProps = {
    navTitle : "add Title",
    searchBtn: "add search btn"
}


