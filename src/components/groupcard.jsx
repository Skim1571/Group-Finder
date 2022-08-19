import axios from "axios"
import { useEffect,useState } from "react"
import { BASE_URL } from "../globals"

export default function GroupCard({ chooseGroup, group }) {
  const[gameImage,setGameImage]=useState()
let gameId = group.gameId
  const handleSubmit = (event) => {
    event.preventDefault()
    chooseGroup(group)
  }
  console.log(gameId)
useEffect(()=>{
   const gameImage = async()=>{
      let res = await axios.get(`${BASE_URL}/api/games/image/${gameId}`)
      setGameImage(res.data.image)

    }
gameImage()
},[])
   
  return (
    <div style={{backgroundImage:`url(${gameImage})`,backgroundRepeat:"no-repeat",backgroundPosition:"center", backgroundSize:'20%'}}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <button type="submit" className="poster">
          <h1>Game: {group.title}</h1>
          <h3>group size: {group.groupSize}</h3>
          <h3>date: {group.date.substring(0, 10)}</h3>
          <p>Description:{group.description}</p>
        </button>
      </form>
    </div>
  )
}