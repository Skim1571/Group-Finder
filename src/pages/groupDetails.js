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
    props.setRender(true)
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
  const [usernames, setUsernames] = useState([])

  useEffect(() => {
    const getUnits = async () => {
      let res = await axios.get(`${BASE_URL}/api/units/groups/${group_Id}`)
      console.log(res.data)
      setUnitPlayers(res.data)
    }
    getUnits()
  }, [unitInfo])

  useEffect(() => {
    let playerNames = []
    let array = []
    const filterName = async () => {
      if (unitPlayers) {
        await unitPlayers.forEach((obj) => {
          array.push(obj.playerId)
        })
        array.map(async (playerId) => {
          let res = await axios.get(`${BASE_URL}/api/players/name/${playerId}`)
          playerNames.push(res.data.username)
          setUsernames(playerNames)
        })
      }
    }
    filterName()
  }, [unitPlayers])

  const joinGroup = async () => {
    console.log('playerID information here:', props.player.id)
    let information = {
      playerId: props.player.id,
      groupId: group_Id
    }
    let res = await axios.post(`${BASE_URL}/api/units`, information)
    setUnitInfo(res.data)
  }

  const leaveGroup = async () => {
    await axios.delete(`${BASE_URL}/api/units/${group_Id}`)
  }

  const defaultPage = (
    <div className="groupdetails page">
      <button onClick={handleClick}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <h1> {props.selectedGroup.title}</h1>
      <h2>Group Size: {props.selectedGroup.groupSize}</h2>
      <h4>Date: {props.selectedGroup.date.substring(0, 10)}</h4>
      <p>Description: {props.selectedGroup.description}</p>

      <Players usernames={usernames} />

      <button onClick={joinGroup}>+Join Group+</button>
      <button onClick={leaveGroup}>-Leave Group-</button>
    </div>
  )

  return (
    <div className="groupdetails page">{!isEdit ? defaultPage : editPage}</div>
  )
}
