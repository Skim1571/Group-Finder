

export default function GroupCard({ group }) {
  return (
    <div>
      <form action='/group'>
        <button type="submit">
          <h1>Game: {group.title}</h1>
          <h3>group size: {group.groupSize}</h3>
          <h3>date: {group.date}</h3>
          <p>Description:{group.description}</p>
        </button>
      </form>
    </div>
  )
}