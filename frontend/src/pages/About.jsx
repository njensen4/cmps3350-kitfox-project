import '../css/about.css'

function About() {
  return (
    <section className="about-page">
      <div className="about-content">
        <p className="about-eyebrow">About Kit Fox Finder</p>

        <h1>A simple way to report kit fox sightings around CSUB.</h1>

        <p className="about-intro">
          Kit Fox Finder helps collect and organize kit fox sightings on campus.
          Instead of sightings being scattered through messages or word of mouth,
          the app gives people one place to submit and view reports.
        </p>

        <div className="about-cards">
          <article className="about-card">
            <h2>Report sightings</h2>
            <p>
              Users can submit a sighting with details like location, date, time,
              and a short description of what they saw.
            </p>
          </article>

          <article className="about-card">
            <h2>View activity</h2>
            <p>
              Sightings can be viewed in one place, making it easier to see where
              kit foxes have recently been noticed around campus.
            </p>
          </article>

          <article className="about-card">
            <h2>Support awareness</h2>
            <p>
              The app helps students, staff, and researchers stay more aware of
              kit fox activity and better understand campus wildlife.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About