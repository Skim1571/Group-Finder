import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'
import { Home } from './pages/Home'
import AboutUs from './pages/about'
import './style/App.css'
import { Register } from './pages/Register'
import Nav from './components/nav'
import GroupPage from './pages/group'

function App() {
  //  React State Section
  const [formState, setFormState] = useState()

  // pass this down to group page to map groups and get correct data
  const [group, SetGroup] = useState([])

  //  Functions Section
  const handleChange = async (event) => {}
  // This is all theoretical subject to change when back-end becomes available
  useEffect(() => {
    async function getGroups() {
      const groupInfo = await axios.get(`${BASE_URL}/GROUP-ROUTES FROM-BACKEND`)
      SetGroup(groupInfo.data.groups)
    }
    getGroups()
  })

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/groups" element={<GroupPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
