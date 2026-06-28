import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout.jsx'

import Home from './pages/Home.jsx'
import SubmitSighting from './pages/SubmitSighting.jsx'
import Sightings from './pages/Sightings.jsx'
import SightingsMap from './pages/SightingsMap.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitSighting />} />
        <Route path="/sightings" element={<SightingsMap />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
