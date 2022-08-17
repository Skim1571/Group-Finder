import { useState } from "react"
import { GroupForm } from "../components/GroupForm"
import axios from "axios"
import { BASE_URL } from "../globals"
import { useNavigate, useParams } from "react-router-dom"


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
    let res = await axios.put(`${BASE_URL}/api/groups/${group_Id}`, updatedGroup)
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
      <GroupForm handleChange={handleChange} onSubmit={onSubmit} updatedGroup={updatedGroup} />
    </div>
  )


  const defaultPage = (
    <div className="groupdetails page">
      <button onClick={handleClick}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <h1> {props.selectedGroup.title}</h1>
      <h2>PlayerCount: {props.players}</h2>
      <h4>Date: {props.selectedGroup.date.substring(0, 10)}</h4>
      <p>Description: {props.selectedGroup.description}</p>
    </div>
  )


  return (
    <div className="groupdetails page">
      {!isEdit ? defaultPage : editPage}
    </div>
  )
}
