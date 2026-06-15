import { Link } from 'react-router-dom'

import '../css/submit-sighting.css'

function SubmitSighting() {
  return (
    <div className="submit-sighting-container page-container">
      <div className="submit-page-header">
        <h1 className="submit-page-title">Submit a Kit Fox Sighting</h1>

        <p className="submit-page-description">
          Report you kit fox sightings to help us track their activity on campus.
        </p>
      </div>
      <form className="submit-form">
        
        <div className="submit-form-grid">
          <div className="submit-form-group">
            <label htmlFor="date">Date of Sighting</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="submit-form-group">
            <label htmlFor="time">Time of Sighting</label>
            <input type="time" id="time" name="time" />
          </div>
        </div>
        
        <div className="submit-form-group">
          <label htmlFor="location">Location of Sighting</label>
          <input type="text" id="location" name="location" placeholder="e.g. Near Science III Building, Towards the Dorms" />
        </div>
        
        <div className="submit-form-group">
          <label htmlFor="photo-upload">Upload a Photo of the Sighting</label>
          <div className="submit-upload-area">
            <div className="submit-upload-icon" aria-hidden="true">📷</div>

            <p className="submit-upload-text">Click or drag and drop to upload a photo</p>
            <p className="submit-upload-subtext">Accepted formats: JPG, PNG, or GIF (Max 5MB)</p>
          </div>
        </div>

        <div className="submit-form-group">
          <label htmlFor="health">Kit Fox Health Condition</label>
          <select className="submit-selector" id="health" name="health">
            <option value="">Select health condition</option>
            <option value="healthy">Healthy</option>
            <option value="injured">Injured</option>
            <option value="sick">Sick</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="submit-button-group">
          <button className="btn btn-primary" type="submit">Submit Sighting</button>
          <Link className="btn btn-secondary" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SubmitSighting