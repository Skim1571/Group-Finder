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
import GroupDetails from './pages/groupDetails'
import { GameCreation } from './pages/GameCreation'

function App() {
  //  React State Section
  const [regFormState, setRegFormState] = useState()
  const [gameFormState, setGameFormState] = useState()

  // pass this down to group page to map groups and get correct data
  const [group, SetGroup] = useState([])

  //  Functions Section

  // This is all theoretical subject to change when back-end becomes available
  useEffect(() => {
    async function getGroups() {
      const groupInfo = await axios.get(`${BASE_URL}/GROUP-ROUTES FROM-BACKEND`)
      SetGroup(groupInfo.data.groups)
    }
    getGroups()
  }, [])

  // Registration Form EventListeners
  const regFormHandleChange = async (event) => {
    setRegFormState({ ...regFormState, [event.target.name]: event.target.value })
  }

  const regFormHandleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/GROUP-ROUTES FROM-BACKEND`, regFormState)
  }

  // Game Form EventListeners
  const gameFormHandleChange = async (event) => {
    setGameFormState({ ...gameFormState, [event.target.name]: event.target.value })
  }

  const gameFormHandleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/GROUP-ROUTES FROM-BACKEND`, gameFormState)
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
          <Route path="/groups" element={<GroupPage />} />
          <Route
            path="/register"
            element={<Register handleChange={regFormHandleChange} onSubmit={regFormHandleSubmit} />}
          />
          <Route path="/group" element={<GroupDetails name />} />
          <Route
            path="/creategame"
            element={<GameCreation handleChange={gameFormHandleChange} onSubmit={gameFormHandleSubmit} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
