import { useState, useEffect } from 'react'
import { GroupForm } from '../components/GroupForm'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate, useParams } from 'react-router-dom'
import Players from '../components/players'

export default function GroupDetails(props) {
  let navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const [updatedGroup, setUpdatedGroup] = useState({})
  let { group_Id } = useParams()

  const handleChange = (event) => {
    setUpdatedGroup({
      ...updatedGroup,
      [event.target.name]: event.target.value
    })
  }

  const handleClick = () => {
    setUpdatedGroup({
      date: props.selectedGroup.date,
      title: props.selectedGroup.title,
      description: props.selectedGroup.description,
      groupSize: props.selectedGroup.groupSize,
      playerId: props.selectedGroup.playerId,
      gameId: props.selectedGroup.gameId
    })
    setIsEdit(true)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `${BASE_URL}/api/groups/${group_Id}`,
      updatedGroup
    )
    setUpdatedGroup(res)
    await props.setRender(true)
    props.setSelectedGroup(updatedGroup)
    setIsEdit(false)
  }

  const onDelete = async (event) => {
    let res = await axios.delete(`${BASE_URL}/api/groups/${group_Id}`)
    await props.setRender(true)
    navigate('/groups')
  }

  let editPage = (
    <div>
      <h1>{props.selectedGroup.title}</h1>
      <GroupForm
        handleChange={handleChange}
        onSubmit={onSubmit}
        updatedGroup={updatedGroup}
      />
    </div>
  )

  // <-------------------------------------------------->
  const [unitInfo, setUnitInfo] = useState()
  const [unitPlayers, setUnitPlayers] = useState()
  const [playerNames, setPlayerNames] = useState([])

  let playerName = []
  let player_Id = props.player.id
  useEffect(() => {
    let playerObjArray = []
    const getUnits = async () => {
      let res = await axios.get(`${BASE_URL}/api/groups/players/names/${group_Id}`)
      let playerArr = res.data[0].players
      playerArr.map((playerObj) => {
        playerObjArray.push(playerObj)
      })
      playerObjArray.forEach((Obj) => {
        playerName.push(Obj.username)
      })
      setPlayerNames(playerName)
    }
    getUnits()
  }, [unitInfo])


  const joinGroup = async () => {
    let information = {
      playerId: props.player.id,
      groupId: group_Id
    }
    let res = await axios.post(`${BASE_URL}/api/units`, information)
    setUnitInfo(res.data)
  }

  const leaveGroup = async () => {
    await axios.delete(`${BASE_URL}/api/units/${group_Id}/${player_Id}`)
    navigate('/groups')
  }

  const defaultPage = (
    <div className="groupdetails page">
      <button onClick={handleClick}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <h1> {props.selectedGroup.title}</h1>
      <h2>Group Size: {props.selectedGroup.groupSize}</h2>
      <h4>Date: {props.selectedGroup.date.substring(0, 10)}</h4>
      <p>Description: {props.selectedGroup.description}</p>

      <Players usernames={playerNames} />

      <button onClick={joinGroup}>+Join Group+</button>
      <button onClick={leaveGroup}>-Leave Group-</button>
    </div>
  )

  return (
    <div className="groupdetails page">{!isEdit ? defaultPage : editPage}</div>
  )
}
