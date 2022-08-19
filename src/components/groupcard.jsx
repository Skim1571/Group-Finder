import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from "../globals"

export default function GroupCard({ chooseGroup, group }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    chooseGroup(group)
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <button type="submit">
          <h1>Game: {group.title}</h1>
          <h3>group size: {group.groupSize}</h3>
          <h3>date: {group.date.substring(0, 10)}</h3>
          <p>Description:{group.description}</p>
        </button>
      </form>
    </div>
  )
}