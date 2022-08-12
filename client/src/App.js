import { Routes, Route, useNavigate } from 'react-router-dom'

// import { useState, useEffect } from 'react'
// import { BASE_URL } from './globals'
// import axios from 'axios'
import { Home } from './pages/Home'
import AboutUs from './pages/about'
import './style/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route />
          <Route />
        </Routes>
      </main>
    </div>
  )
}

export default App
