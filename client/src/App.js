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
import { GroupCreation } from './pages/GroupCreation'
import { GameCreation } from './pages/GameCreation'
import { RegisterPlayer } from './services/Auth'
import { CheckSession } from './services/Auth'

function App() {
  const [player, setPlayer] = useState(null)
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

  const initialGroupFormState = {
    title: '',
    date: '',
    groupsize: 0,
    description: '',
    gameId: null
  }

  //  React State Section
  const [regFormState, setRegFormState] = useState(initialRegFormState)
  const [gameFormState, setGameFormState] = useState(initialGameFormState)
  const [groupFormState, setGroupFormState] = useState(initialGroupFormState)
  // pass this down to group page to map groups and get correct data
  const [groups, setGroups] = useState([])
  const [selectedGroup, setSelectedGroup] = useState()
  // Authentication States

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //  Functions Section
  let navigate = useNavigate()

  useEffect(() => {
    async function getGroups() {
      const groupInfo = await axios.get(`${BASE_URL}/api/groups`)
      console.log(groupInfo)
      setGroups(groupInfo.data)
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
    setGameFormState(res)

  }

  // Group Form EventListeners
  const groupFormHandleChange = async (event) => {
    let playerId = player.id
    setGroupFormState({
      playerId,
      ...groupFormState,
      [event.target.name]: event.target.value
    })
  }

  const groupFormHandleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/api/groups`, groupFormState)
    setGroupFormState(res)
    navigate('/')
  }

  const checkToken = async () => {
    const playerSession = await CheckSession()
    setPlayer(playerSession)
    setGroupFormState({
      ...groupFormState
    })
    setIsLoggedIn(true)
    //If a token exists, sends token to localStorage to persist logged in user
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setPlayer(null)
    setIsLoggedIn(false)
    localStorage.clear()
  }

  const chooseGroup = (selected) => {
    setSelectedGroup(selected)
    console.log('selected', selectedGroup)
    navigate(`/groups/${selected.id}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          isLoggedIn={isLoggedIn}
          player={player}
          handleLogOut={handleLogOut}
        />
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
          <Route path="/groups" element={<GroupPage groups={groups} chooseGroup={chooseGroup} />} />
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
          <Route path="/groups/:id" element={<GroupDetails selectedGroup={selectedGroup} />} />

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
          <Route
            path="/groupcreation"
            element={
              <GroupCreation
                handleChange={groupFormHandleChange}
                onSubmit={groupFormHandleSubmit}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
