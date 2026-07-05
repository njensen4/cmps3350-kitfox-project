export const API_BASE_URL = "https://bender.cs.csubak.edu/moreno";

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

export function getSightings() {
  return requestJson('/sightings');
}

export function createSighting(sighting) {
  return requestJson('/sightings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sighting)
  });
}
