import GroupCard from '../components/groupcard'

export default function GroupPage({ groups, chooseGroup }) {
  return (
    <section className='group page'>
      <h1>Group Page</h1>
      <div>
        {groups.map((group) => (
          <div onClick={() => chooseGroup(group)} key={group.id}>
            <GroupCard group={group} />
          </div>
        ))}
      </div>
    </section>
  )
}
