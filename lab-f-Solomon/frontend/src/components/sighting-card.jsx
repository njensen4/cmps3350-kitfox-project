import { Link } from 'react-router-dom'
import '../css/sighting-card.css'

function SightingCard({ sighting }) {
  return (
    <Link className="recent-sighting-card" to="/sightings">
      <div className="recent-sighting-image">
        <img
          src={sighting.image}
          alt={`Kit fox reported at ${sighting.location}`}
        />
      </div>

      <div className="recent-sighting-content">
        <h3>{sighting.location}</h3>

        <p className="recent-sighting-date">
          {sighting.date} at {sighting.time}
        </p>

        <span className="recent-sighting-condition">
          Condition: {sighting.condition}
        </span>
      </div>
    </Link>
  )
}

export default SightingCard
