import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import headerLogo from '../photos/headerlogo.png'

function Navbar() {
  return (
    <nav>
      <h1 className="nav-brand">
        <Link
          to="/"
          className="nav-logo-link"
          aria-label="Seymour Friends home"
        >
          <span className="nav-logo-wrap">
            <img
              className="nav-logo"
              src={headerLogo}
              alt=""
              decoding="async"
            />
          </span>
        </Link>
        <Link to="/" className="nav-brand-title-link">
          <span className="nav-brand-title">Seymour Friends</span>
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/" end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/board">Board</NavLink>
        </li>
        <li>
          <NavLink to="/car-donation">Car Donations</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive ? 'nav-donate nav-donate--active' : 'nav-donate'
            }
          >
            Donate
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar