const imagePath = `${import.meta.env.BASE_URL}images/sample-sightings`

const sampleSightings = [
  {
    id: 1,
    date: '2026-06-10',
    time: '14:30',
    location: 'Near the Science Building',
    condition: 'Healthy',
    description: 'Spotted resting under the large oak tree.',
    image: `${imagePath}/science-building-fox.jpg`,
  },
  {
    id: 2,
    date: '2026-06-09',
    time: '08:15',
    location: 'North Parking Lot',
    condition: 'Unknown',
    description: 'Ran across the parking lot quickly.',
    image: `${imagePath}/north-parking-fox.jpg`,
  },
]

export default sampleSightings
