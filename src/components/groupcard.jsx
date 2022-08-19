export default function GroupCard({ chooseGroup, group, selectedGroup }) {

  const handleSubmit = (event) => {
    event.preventDefault()
    chooseGroup(group)
  }

  useEffect(()=>{
    const gameImage = async() =>{
     let res = await axios.get(`${BASE_URL}/api/games/image/${selectedGroup.gameId}`)
     console.log(res)
    }
    gameImage()
  },[selectedGroup.gameId])

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