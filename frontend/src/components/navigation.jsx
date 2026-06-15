import { NavLink } from 'react-router-dom'
import '../css/navigation.css'

function Navigation() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link'

  return (
    <header className="site-header">
      <div className="nav-container">
        <NavLink className="site-brand" to="/">
          <span className="brand-icon" aria-hidden="true">
            🦊
          </span>

          <span className="brand-text">
            <span className="brand-title">Kit Fox Finder</span>
            <span className="brand-subtitle">CSUB Sighting Tracker</span>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>

          <NavLink className={linkClass} to="/submit">
            Submit Sighting
          </NavLink>

          <NavLink className={linkClass} to="/sightings">
            Sightings
          </NavLink>

          <NavLink className={linkClass} to="/about">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
