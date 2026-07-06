export function isValidDate(value) {
  if (typeof value !== 'string' || value.trim() === '') {
    return false
  }

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)

  if (!match) {
    return false
  }

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])

  const inputDate = new Date(Date.UTC(year, month - 1, day))

  const isRealDate =
    inputDate.getUTCFullYear() === year &&
    inputDate.getUTCMonth() === month - 1 &&
    inputDate.getUTCDate() === day

  if (!isRealDate) {
    return false
  }

  const today = new Date()
  const todayOnly = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  )

  return inputDate <= todayOnly
}

export function hasRequiredSightingFields(sighting) {
  if (!sighting || typeof sighting !== 'object') {
    return false
  }

  const observerName = String(sighting.observer_name ?? '').trim()
  const sightingDate = String(sighting.sighting_date ?? '').trim()
  const locationName = String(sighting.location_name ?? '').trim()

  return observerName !== '' && sightingDate !== '' && locationName !== ''
}

export function isValidObserverName(value) {
  if (typeof value !== 'string') {
    return false
  }

  const trimmedName = value.trim()

  if (trimmedName === '') {
    return false
  }

  return /[A-Za-z]/.test(trimmedName)
}