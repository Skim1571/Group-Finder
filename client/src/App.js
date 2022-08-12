import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { BASE_URL } from './globals'
// import axios from 'axios'
import { Home } from './pages/Home'
import AboutUs from './pages/about'
import './style/App.css'
import { Register } from './pages/Register'
import Nav from './components/nav'

function App() {

  //  React State Section
  const [formState, setFormState] = useState()


  //  Functions Section
  const handleChange = async (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route />
          <Route path="/register" element={<Register handleChange={handleChange} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
