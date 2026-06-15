import Navigation from './navigation.jsx'

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navigation />

      <main className="app-main">
        {children}
      </main>
    </div>
  )
}

export default Layout
