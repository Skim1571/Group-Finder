import { useNavigate } from "react-router-dom"

export default function GroupCard(props){
const navigate = useNavigate('/groupDetails')
return(
  <div>
    <form action='/group'>
      <button type="submit">
    <h1>Game: {props.game}</h1>
    <h1>Activity: We can have this pulled from group creation form</h1>
    <h3>group size: {props.size}</h3>
    <h3>date: {props.date}</h3>
    <p>Description:</p>
    </button>
    </form>
  </div>
)
}