import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../globals"

export const GroupForm = ({ updatedGroup, handleChange, onSubmit }) => {



  return (
    <section className="groupForm page">
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type={'text'}
          name="title"
          value={updatedGroup.title}
          placeholder={updatedGroup.title}
          onChange={handleChange}
        />
        <input
          type={'date'}
          name="date"
          format='mm/dd/yyyy'
          value={updatedGroup.date}
          placeholder={updatedGroup.date}
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="groupSize"
          value={updatedGroup.groupSize}
          placeholder={updatedGroup.groupSize}
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="description"
          value={updatedGroup.description}
          placeholder={updatedGroup.description}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </section>
  )
}
