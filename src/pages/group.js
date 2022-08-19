import GroupCard from "../components/groupcard";

export default function GroupPage({ player, groups, chooseGroup }) {
  return (
    <section className="group page">
      <h1>Group Page</h1>
      <div>
        {groups.map((group) => (
          <div key={group.id}>
            <GroupCard
              chooseGroup={chooseGroup}
              player={player}
              group={group}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
