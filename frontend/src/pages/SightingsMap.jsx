import { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// --- Fix Leaflet's default marker icons under Vite ---
// Without this, the marker pins show up broken/blank because Vite
// changes the asset paths Leaflet expects.
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// Center of CSUB campus
const CSUB_CENTER = [35.3496, -119.1037]

// Box around CSUB campus: [southwest corner], [northeast corner]
const CSUB_BOUNDS = [
  [35.3445, -119.1105],  // SW
  [35.3550, -119.0975],  // NE
]

// Placeholder sighting data. Each one has a [lat, lng] position.
// Later you can swap this array for data from your backend.
const SIGHTINGS = [
  {
    id: 1,
    location: 'Near the Science Building',
    date: '2026-06-10 at 14:30',
    condition: 'Healthy',
    position: [35.3505, -119.1024],
  },
  {
    id: 2,
    location: 'North Parking Lot',
    date: '2026-06-09 at 08:15',
    condition: 'Unknown',
    position: [35.3521, -119.1041],
  },
  {
    id: 3,
    location: 'Walter Stiern Library',
    date: '2026-06-08 at 18:45',
    condition: 'Healthy',
    position: [35.3487, -119.1031],
  },
  {
    id: 4,
    location: 'Soccer Field (East)',
    date: '2026-06-07 at 06:50',
    condition: 'Needs review',
    position: [35.3499, -119.1009],
  },
]

function SightingsMap() {
  const [activeId, setActiveId] = useState(null)
  const mapRef = useRef(null)          // the Leaflet map instance
  const markerRefs = useRef({})        // one ref per marker, keyed by id

  // Called when a list item is clicked: highlight it, fly the map
  // to its position, and open that marker's popup.
  const focusSighting = (sighting) => {
    setActiveId(sighting.id)

    const map = mapRef.current
    if (map) {
      map.flyTo(sighting.position, 17, { duration: 0.8 })
    }

    const marker = markerRefs.current[sighting.id]
    if (marker) {
      marker.openPopup()
    }
  }

  return (
    <section style={{ maxWidth: 'var(--content-width, 1180px)', margin: '0 auto', padding: '24px' }}>
      <h2>Sightings</h2>
      <p>Click a sighting to see where it happened on the map.</p>

     
      <div className="sightings-layout" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        {/* Left: the clickable list */}

        <ul className="sightings-list" style={{ flex: '1 1 0', listStyle: 'none', padding: 0, margin: 0 }}>
          {SIGHTINGS.map((s) => (
            <li
              key={s.id}
              className={
                's-card' + (activeId === s.id ? ' s-card--active' : '')
              }
              onClick={() => focusSighting(s)}
            >
              <strong>{s.location}</strong>
              <div className="s-date">{s.date}</div>
              <span className="s-tag">Condition: {s.condition}</span>
            </li>
          ))}
        </ul>

        {/* Right: the interactive map */}
     
        <div className="sightings-map" style={{ flex: '1 1 0' }}>
          <MapContainer
            center={CSUB_CENTER}
            zoom={16}
	    minZoom={15}
            maxBounds={CSUB_BOUNDS}
            maxBoundsViscosity={1.0} 
            scrollWheelZoom={true}
            style={{ height: '500px', width: '100%', borderRadius: '12px' }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {SIGHTINGS.map((s) => (
              <Marker
                key={s.id}
                position={s.position}
                ref={(el) => {
                  markerRefs.current[s.id] = el
                }}
                eventHandlers={{ click: () => setActiveId(s.id) }}
              >
                <Popup>
                  <strong>{s.location}</strong>
                  <br />
                  {s.date}
                  <br />
                  Condition: {s.condition}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

export default SightingsMap
