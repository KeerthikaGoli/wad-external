import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navmain">
            <nav className="navbar1 navbar nav1 navbar-expand-sm ">
  <div className="nav2 container-fluid">
    <div className="navchild1">
    <NavLink className="navbar-brand" to=""><h1>Shopify</h1></NavLink>
    </div>
    <div className="collapse navbar-collapse navchild2" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="login">Log in</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="catalog">Catalog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="cart">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar



            