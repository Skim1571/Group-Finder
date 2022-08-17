export default function GroupDetails(props) {
  return (
    <div className="groupdetails page">
      <h1>GroupName: {props.name}</h1>
      <h2>PlayerCount: {props.players}</h2>
      <h4>Date: {props.date}</h4>
      <p>Description: {props.description}</p>
    </div>
  )
}
