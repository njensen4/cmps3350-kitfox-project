import {
  isValidDate,
  hasRequiredSightingFields,
  isValidObserverName
} from './validation.js'

test('accepts a date that is today', () => {
  const today = new Date().toISOString().split('T')[0]

  expect(isValidDate(today)).toBe(true)
})

test('rejects a date that is in the future', () => {
  const future = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0]

  expect(isValidDate(future)).toBe(false)
})

test('accepts a date that is in the past', () => {
  const past = new Date(Date.now() - 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0]

  expect(isValidDate(past)).toBe(true)
})

test('rejects an invalid date string', () => {
  expect(isValidDate('invalid-date')).toBe(false)
})

test('rejects an empty date string', () => {
  expect(isValidDate('')).toBe(false)
})

test('rejects an impossible calendar date', () => {
  expect(isValidDate('2026-02-31')).toBe(false)
})

test('accepts a sighting with all required fields', () => {
  const sighting = {
    observer_name: 'Emmerich Moreno',
    sighting_date: '2026-06-28',
    location_name: 'CSUB Library'
  }

  expect(hasRequiredSightingFields(sighting)).toBe(true)
})

test('rejects a sighting missing a required field', () => {
  const sighting = {
    observer_name: 'Emmerich Moreno',
    sighting_date: '2026-06-28'
  }

  expect(hasRequiredSightingFields(sighting)).toBe(false)
})

test('rejects a sighting with blank required fields', () => {
  const sighting = {
    observer_name: '   ',
    sighting_date: '2026-06-28',
    location_name: ''
  }

  expect(hasRequiredSightingFields(sighting)).toBe(false)
})

test('rejects a null sighting object', () => {
  expect(hasRequiredSightingFields(null)).toBe(false)
})

test('accepts an observer name with letters', () => {
  expect(isValidObserverName('Emmerich Moreno')).toBe(true)
})

test('rejects an observer name with only numbers', () => {
  expect(isValidObserverName('12345')).toBe(false)
})

test('rejects an observer name that is only spaces', () => {
  expect(isValidObserverName('   ')).toBe(false)
})