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
import { RegisterPlayer } from './services/Auth'

function App() {
  // initial States
  const initialRegFormState = {
    username: '',
    email: '',
    discord: '',
    passcode: ''
  }
  const initialGameFormState = {
    gameName: '',
    image: '',
    groupSize: '',
    description: ''
  }

  const initialPlayerFormState = {
    username: '',
    passcode: ''
  }

  //  React State Section
  const [regFormState, setRegFormState] = useState(initialRegFormState)
  const [gameFormState, setGameFormState] = useState(initialGameFormState)
  // pass this down to group page to map groups and get correct data
  const [group, SetGroup] = useState([])
  // Authentication States
  const [player, setPlayer] = useState(initialPlayerFormState)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //  Functions Section
  let navigate = useNavigate()

  useEffect(() => {
    async function getGroups() {
      const groupInfo = await axios.get(`${BASE_URL}/api/groups`)
      SetGroup(groupInfo.data.groups)
    }
    getGroups()
  }, [])

  // Registration Form EventListeners
  const regFormHandleChange = async (event) => {
    setRegFormState({
      ...regFormState,
      [event.target.name]: event.target.value
    })
  }

  const regFormHandleSubmit = async (event) => {
    event.preventDefault()
    await RegisterPlayer({
      username: regFormState.username,
      email: regFormState.email,
      discord: regFormState.discord,
      password: regFormState.passcode
    })
    // setRegFormState(initialRegFormState)
    navigate(`/`)
  }

  // Game Form EventListeners
  const gameFormHandleChange = async (event) => {
    setGameFormState({
      ...gameFormState,
      [event.target.name]: event.target.value
    })
  }

  const gameFormHandleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/api/games`, gameFormState)
    setGameFormState()
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            index
            element={
              <Home
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setPlayer={setPlayer}
                player={player}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/groups" element={<GroupPage />} />

          <Route
            path="/register"
            element={
              <Register
                formState={regFormState}
                handleChange={regFormHandleChange}
                onSubmit={regFormHandleSubmit}
              />
            }
          />
          <Route path="/group" element={<GroupDetails name />} />

          <Route
            path="/creategame"
            element={
              <GameCreation
                formState={gameFormState}
                handleChange={gameFormHandleChange}
                onSubmit={gameFormHandleSubmit}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
