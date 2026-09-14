import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import headerLogo from '../photos/headerlogo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  return (
    <nav>
      <div className="nav-top">
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
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <ul id="site-menu" className={menuOpen ? 'is-open' : undefined}>
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
