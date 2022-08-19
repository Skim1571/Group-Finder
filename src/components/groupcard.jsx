import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"

export default function GroupCard({ chooseGroup, group }) {
  const [gameImage, setGameImage] = useState()
  let gameId = group.gameId
  const handleSubmit = (event) => {
    event.preventDefault()
    chooseGroup(group)
  }
  console.log(gameId)
  useEffect(() => {
    const gameImage = async () => {
      let res = await axios.get(`${BASE_URL}/api/games/image/${gameId}`)
      console.log(res.data.image)
      setGameImage(res.data.image)
    }
    gameImage()
  }, [])

  console.log('image', gameImage)

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <button type="submit" className="poster">
          <img src={gameImage} alt='image' className='cardImage' />
          <h1>Game: {group.title}</h1>
          <h3>group size: {group.groupSize}</h3>
          <h3>date: {group.date.substring(0, 10)}</h3>
          <p>Description:{group.description}</p>
        </button>
      </form>
    </div>
  )
}