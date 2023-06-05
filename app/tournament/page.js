import PlayerTable from "@/components/PlayerTable";
import TournamentTable from "@/components/TournamentTable";
import { main } from "@/style/style";

function Tournament() {
  return (
    <main className={main} style={{ width: "1200px" }}>
      <div className="col-span-full">
        <TournamentTable></TournamentTable>
      </div>
    </main>
  );
}

export default Tournament;
