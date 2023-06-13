import PlayerTable from "@/components/PlayerTable";
import TournamentTable from "@/components/TournamentTable";
import { main } from "@/style/style";
import { Fragment } from "react";

function Tournament() {
  return (
    <Fragment>
      <div className="col-span-full row-span-full max-lg:overflow-scroll">
        <TournamentTable></TournamentTable>
      </div>
    </Fragment>
  );
}

export default Tournament;
