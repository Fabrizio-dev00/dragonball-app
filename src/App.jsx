import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Entities from './pages/Entities'

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Dragon Ball Explorer</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-3">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entities">Entities</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </main>

      <footer className="text-center py-3 mt-4">
        Made with — Dragon Ball Explorer
      </footer>
    </div>
  )
}
