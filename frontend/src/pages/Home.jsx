import { Link } from 'react-router-dom'

import SightingCard from '../components/sighting-card.jsx'
import sampleSightings from '../data/sample-sightings.js'

import '../css/home.css'

function Home() {
  const recentSightings = sampleSightings.slice(0, 2)
  const campusMap = `${import.meta.env.BASE_URL}images/placeholders/campus-map.jpg`

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

      <div className="home-dashboard">
        <section className="home-dashboard-section">
          <div className="home-section-header">
            <h2>Recent Sightings</h2>

            <Link className="home-view-all" to="/sightings">
              View all <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="recent-sightings-list">
            {recentSightings.map((sighting) => (
              <SightingCard key={sighting.id} sighting={sighting} />
            ))}
          </div>
        </section>

        <section className="home-dashboard-section">
          <div className="home-section-header">
            <h2>Campus Hotspots</h2>
          </div>

          <div className="campus-map-card">
            <img src={campusMap} alt="Placeholder preview of the CSUB campus" />

            <span className="campus-map-pin campus-map-pin-one" aria-hidden="true">
              📍
            </span>

            <span className="campus-map-pin campus-map-pin-two" aria-hidden="true">
              📍
            </span>

            <div className="campus-map-overlay">
              <h3>CSUB Campus View</h3>
              <p>Explore where recent sightings have occurred.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home