import PlayerTable from "@/components/PlayerTable";

function Player() {
  return (
    <main
      className="grid grid-cols-4 gap-0.5 m-auto"
      style={{ width: "1200px" }}
    >
      <div className="col-span-full">
        <PlayerTable></PlayerTable>
      </div>
    </main>
  );
}

export default Player;
