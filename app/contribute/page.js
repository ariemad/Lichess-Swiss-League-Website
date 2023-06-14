import Events from "@/components/Events";
import Leaderboard from "@/components/Leaderboard";
import { Fragment } from "react";
import Contribute from "@/components/Contribute";

function ContributePage() {
  return (
    <Fragment>
      <div className="">
        <Events></Events>
      </div>
      <div
        className={
          " col-start-2 col-span-2 row-span-full" + " max-md:col-start-1"
        }
      >
        <Contribute></Contribute>
      </div>
      <div className="">
        <Leaderboard
          display={"array"}
          array={[
            ["allTime", "nbWins"],
            ["allTime", "participation"],
            ["allTime", "points"],
          ]}
        ></Leaderboard>
      </div>
    </Fragment>
  );
}

export default ContributePage;
