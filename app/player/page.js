import PlayerTable from "@/components/PlayerTable";
import { Fragment } from "react";

function Player() {
  return (
    <Fragment>
      <div className="col-span-full row-span-full max-lg:overflow-scroll">
        <PlayerTable></PlayerTable>
      </div>
    </Fragment>
  );
}

export default Player;
