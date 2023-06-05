import PlayerTable from "@/components/PlayerTable";
import { main } from "@/style/style";

function Player() {
  return (
    <main className={main} style={{ width: "1200px" }}>
      <div className="col-span-full">
        <PlayerTable></PlayerTable>
      </div>
    </main>
  );
}

export default Player;
