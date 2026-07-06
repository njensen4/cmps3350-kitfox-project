import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { getSightings } from "../api";
import "../css/sightings.css";
import "../css/sighting-card.css";

const CSUB_CENTER = [35.3496, -119.1037];

const CSUB_BOUNDS = [
  [35.3445, -119.1105],
  [35.355, -119.0975],
];


function formatDate(value) {
  if (!value) {
    return "Date not provided";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString();
}

function getSightingTitle(sighting) {
  return (
    sighting.location_name ||
    sighting.location ||
    sighting.title ||
    "Kit fox sighting"
  );
}

function getSightingLocation(sighting) {
  return (
    sighting.location_name ||
    sighting.location ||
    sighting.location_description ||
    "Location not provided"
  );
}

function getSightingDate(sighting) {
  return (
    sighting.sighting_date ||
    sighting.date ||
    sighting.created_at ||
    sighting.createdAt
  );
}

function getSightingNotes(sighting) {
  return (
    sighting.notes ||
    sighting.description ||
    "No notes were added for this sighting."
  );
}

export default function Sightings() {
  const [sightings, setSightings] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const campusMap = `${import.meta.env.BASE_URL}images/placeholders/campus-map.jpg`;

  useEffect(() => {
    async function loadSightings() {
      try {
        const data = await getSightings();

        if (Array.isArray(data)) {
          setSightings(data);
        } else if (Array.isArray(data.sightings)) {
          setSightings(data.sightings);
        } else {
          setSightings([]);
        }

        setStatus("success");
      } catch (error) {
        console.error("Error loading sightings:", error);
        setErrorMessage("Sightings could not be loaded right now.");
        setStatus("error");
      }
    }

    loadSightings();
  }, []);

  return (
    <main className="sightings-page">
      <section className="sightings-hero">
        <p className="eyebrow">Recent Reports</p>
        <h1>Kit Fox Sightings</h1>
        <p>
          View recent kit fox reports submitted through the tracker. Each card
          shows the location, date, and notes stored for a sighting.
        </p>
      </section>

      {status === "loading" && (
        <p className="sightings-message">Loading sightings...</p>
      )}

      {status === "error" && (
        <p className="sightings-message sightings-error">{errorMessage}</p>
      )}

      {status === "success" && sightings.length === 0 && (
        <p className="sightings-message">
          No sightings have been submitted yet.
        </p>
      )}

      {status === "success" && sightings.length > 0 && (
        <section className="sightings-grid" aria-label="Submitted sightings">
          {sightings.map((sighting) => (
            <article className="sighting-card" key={sighting.id}>
              <div className="sighting-card-header">
                <div>
                  <p className="sighting-label">Sighting #{sighting.id}</p>
                  <h2>{getSightingTitle(sighting)}</h2>
                </div>

                <span className="sighting-status">
                  {sighting.status || "Submitted"}
                </span>
              </div>

              <div className="sighting-details">
                <p>
                  <strong>Location:</strong> {getSightingLocation(sighting)}
                </p>

                <p>
                  <strong>Date:</strong> {formatDate(getSightingDate(sighting))}
                </p>

                {sighting.time && (
                  <p>
                    <strong>Time:</strong> {sighting.time}
                  </p>
                )}
              </div>

              <p className="sighting-notes">{getSightingNotes(sighting)}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}