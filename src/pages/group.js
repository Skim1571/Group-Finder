import GroupCard from "../components/groupcard";

export default function GroupPage({
  player,
  groups,
  chooseGroup,
  selectedGroup,
}) {
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
              selectedGroup={selectedGroup}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
