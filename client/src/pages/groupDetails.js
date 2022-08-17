export default function GroupDetails(props) {
  return (
    <div className="groupdetails page">
      <h1> {props.selectedGroup.title}</h1>
      <h2>PlayerCount: {props.players}</h2>
      <h4>Date: {props.selectedGroup.date}</h4>
      <p>Description: {props.selectedGroup.description}</p>
    </div>
  )
}
