import PlayerTable from "@/components/PlayerTable";
import TournamentTable from "@/components/TournamentTable";

function Tournament() {
  return (
    <main
      className="grid grid-cols-4 gap-0.5 m-auto"
      style={{ width: "1200px" }}
    >
      <div className="col-span-full">
        <TournamentTable></TournamentTable>
      </div>
    </main>
  );
}

export default Tournament;
