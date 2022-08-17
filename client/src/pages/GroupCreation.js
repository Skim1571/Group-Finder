import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"

export const GroupCreation = ({ handleChange, onSubmit }) => {
  const [games, setGames] = useState()

  useEffect(() => {
    async function getGames() {
      const gameInfo = await axios.get(`${BASE_URL}/api/games`)
      setGames(gameInfo.data)
    }
    getGames()
  }, [])




  return (
    <section className="groupCreation page">
      <h1>Group Creation Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <select defaultValue="" name="gameId" onChange={handleChange}>
          <option value="" disabled hidden>Choose Game</option>
          <option value="1">Dota 2</option>
          <option value="2">Counter Strike</option>
        </select>
        <input
          type={'text'}
          name="title"
          placeholder=" Enter Title"
          onChange={handleChange}
          required
        />
        <input
          type={'Date'}
          name="date"
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
        <button>Submit</button>
      </form>
    </section>
  )
}
