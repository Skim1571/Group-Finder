import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"

export const GroupCreation = ({ handleChange, onSubmit }) => {
  const [game, setGame] = useState()

  useEffect(() => {
    async function getGames() {
      const gameInfo = await axios.get(`${BASE_URL}/api/games`)
      setGame(gameInfo.data)
    }
    getGames()
  }, [])

  return (
    <section className="groupCreation page">
      <h1>Group Creation Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type={'text'}
          name="Title"
          placeholder=" Enter Title"
          onChange={handleChange}
          required
        />
        <input
          type={'Date'}
          name="Date"
          placeholder="mm/dd/yyyy"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="groupsize"
          placeholder="Enter Your group size"
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="description"
          placeholder="Enter Your Group Description"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="gameId"
          placeholder="Enter Your gameId"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  )
}
