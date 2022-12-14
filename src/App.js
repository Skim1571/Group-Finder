import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL } from "./globals";
import axios from "axios";
import { Home } from "./pages/Home";
import AboutUs from "./pages/about";
import "./style/App.css";
import { Register } from "./pages/Register";
import Nav from "./components/nav";
import GroupPage from "./pages/group";
import GroupDetails from "./pages/groupDetails";
import { GroupCreation } from "./pages/GroupCreation";
import { GameCreation } from "./pages/GameCreation";
import { RegisterPlayer } from "./services/Auth";
import { CheckSession } from "./services/Auth";

function App() {
  const [player, setPlayer] = useState(null);
  // initial States
  const initialRegFormState = {
    username: "",
    email: "",
    discord: "",
    passcode: "",
  };
  const initialGameFormState = {
    gameName: "",
    image: "",
    groupSize: "",
    description: "",
  };

  const initialGroupFormState = {
    title: "",
    date: "",
    groupsize: 0,
    description: "",
    gameId: null,
  };

  //  React State Section
  const [regFormState, setRegFormState] = useState(initialRegFormState);
  const [gameFormState, setGameFormState] = useState(initialGameFormState);
  const [groupFormState, setGroupFormState] = useState(initialGroupFormState);
  // pass this down to group page to map groups and get correct data
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState();
  const [render, setRender] = useState(false);
  // Authentication States
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //  Functions Section
  let navigate = useNavigate();

  useEffect(() => {
    async function getGroups() {
      const groupInfo = await axios.get(`${BASE_URL}/api/groups`);
      setGroups(groupInfo.data);
    }
    getGroups();
  }, [render]);

  // Registration Form EventListeners
  const regFormHandleChange = async (event) => {
    await setRegFormState({
      ...regFormState,
      [event.target.name]: event.target.value,
    });
  };

  const regFormHandleSubmit = async (event) => {
    event.preventDefault();
    await RegisterPlayer({
      username: regFormState.username,
      email: regFormState.email,
      discord: regFormState.discord,
      password: regFormState.passcode,
    });
    // setRegFormState(initialRegFormState)
    navigate(`/`);
  };

  // Game Form EventListeners
  const gameFormHandleChange = async (event) => {
    await setGameFormState({
      ...gameFormState,
      [event.target.name]: event.target.value,
    });
  };

  const gameFormHandleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post(`${BASE_URL}/api/games`, gameFormState);
    setGameFormState(initialGameFormState);
  };

  // Group Form EventListeners
  const groupFormHandleChange = async (event) => {
    let playerId = player.id;
    setGroupFormState({
      playerId,
      ...groupFormState,
      [event.target.name]: event.target.value,
    });
  };

  const groupFormHandleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/api/groups`, groupFormState)
    setGroupFormState(res)
    const postvar = { playerId: player.id, groupId: res.data.id }
    let newRes = await axios.post(`${BASE_URL}/api/units`, postvar)
    await setRender(true)
    navigate('/groups')
  }

  const checkToken = async () => {
    const playerSession = await CheckSession();
    setPlayer(playerSession);
    setGroupFormState({
      ...groupFormState,
    });
    setIsLoggedIn(true);
    //If a token exists, sends token to localStorage to persist logged in user
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setPlayer(null);
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const chooseGroup = (selected) => {
    setSelectedGroup(selected);
    navigate(`/groups/${selected.id}`);
  };

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
                setRender={setRender}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setPlayer={setPlayer}
                player={player}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/groups"
            element={<GroupPage groups={groups} chooseGroup={chooseGroup} />}
          />
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
          <Route
            path="/groups/:group_Id"
            element={
              <GroupDetails
                player={player}
                setSelectedGroup={setSelectedGroup}
                setRender={setRender}
                selectedGroup={selectedGroup}
              />
            }
          />

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
                selectedGroup={selectedGroup}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
