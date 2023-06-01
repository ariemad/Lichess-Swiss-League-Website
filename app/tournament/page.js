import PlayerTable from "@/components/PlayerTable";

function Tournament() {
  return (
    <main
      className="grid grid-cols-4 gap-0.5 m-auto"
      style={{ width: "1200px" }}
    >
      <PlayerTable></PlayerTable>
    </main>
  );
}

export default Tournament;
