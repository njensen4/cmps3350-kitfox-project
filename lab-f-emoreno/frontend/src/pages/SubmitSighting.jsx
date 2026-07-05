import { useState } from 'react'
import { API_BASE_URL } from '../api.js'

const initialFormData = {
  observerName: '',
  sightingDate: '',
  locationName: ''
}

function SubmitSighting() {
  const [formData, setFormData] = useState(initialFormData)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setSuccessMessage('')
    setErrorMessage('')
    setSubmitting(true)

    const newSighting = {
      observer_name: formData.observerName,
      sighting_date: formData.sightingDate,
      location_name: formData.locationName
    }

    try {
      const response = await fetch(`${API_BASE_URL}/sightings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSighting)
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const result = await response.json()

      setSuccessMessage(`Sighting created with ID ${result.id}. Check the Sightings page to see the new record.`)
      setFormData(initialFormData)
    } catch (err) {
      console.error(err)
      setErrorMessage('Could not create the sighting. Check your API URL and backend.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <h2>Submit Sighting</h2>

      <p>
        This form sends a POST request to the Express/MySQL API.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Observer name
          <input
            type="text"
            value={observerName}
            onChange={(event) => setObserverName(event.target.value)}
            required
          />
        </label>

        <label>
          Sighting date
          <input
            type="date"
            value={sightingDate}
            onChange={(event) => setSightingDate(event.target.value)}
            required
          />
        </label>

        <label>
          Location name
          <input
            type="text"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
            placeholder="Example: CSUB campus"
            required
          />
        </label>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Sighting'}
        </button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  )
}

export default SubmitSighting