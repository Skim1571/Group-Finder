
export default function Players({usernames}){
  if (usernames) {
  return (
      <div>
        {usernames.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
    </div>
  )
  }
}