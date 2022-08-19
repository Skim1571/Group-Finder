import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"

export const GroupCreation = ({ handleChange, onSubmit }) => {

  return (
    <section className="groupCreation page">
      <h1>Group Creation Form</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <select defaultValue="" name="gameId" onChange={handleChange}>
          <option value="" disabled hidden>Choose Game</option>
          <option value="1">Dota 2</option>
          <option value="2">Counter Strike Go</option>
          <option value="3">Fortnite</option>
          <option value="4">Valorant</option>
          <option value="5">Human Fall Flat</option>
        </select>
        {/* {optionList} */}
        <input
          type={'text'}
          name="title"
          placeholder=" Enter Title"
          onChange={handleChange}
          required
        />
        <input
          type={'date'}
          name="date"
          format='mm/dd/yyyy'
          placeholder="mm/dd/yyyy"
          onChange={handleChange}
          required
        />
        <input
          type={'text'}
          name="groupSize"
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
