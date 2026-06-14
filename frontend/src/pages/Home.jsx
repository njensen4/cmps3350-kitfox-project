import { Link } from 'react-router-dom'
import '../css/home.css'

function Home() {
  return (
    <div className="home-page page-container">
      <section className="home-hero">
        <div className="home-fox-badge" aria-hidden="true">
          🦊
        </div>

        <h1 className="home-title">
          Welcome to <span>Kit Fox Finder</span>
        </h1>

        <p className="home-description">
          Help us track, monitor, and protect the endangered San Joaquin kit
          foxes living on the CSUB campus.
        </p>

        <div className="home-actions">
          <Link className="home-button home-button-primary" to="/submit">
            <span aria-hidden="true">📷</span>
            Submit Sighting
          </Link>

          <Link className="home-button home-button-secondary" to="/sightings">
            <span aria-hidden="true">📍</span>
            View Sightings
          </Link>
        </div>
      </section>

      <div className="home-divider" />
    </div>
  )
}

export default Home