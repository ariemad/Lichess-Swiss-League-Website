import { borders, main, typography } from "@/style/style";
import Events from "@/components/Events";
import Leaderboard from "@/components/Leaderboard";

function Contribute() {
  return (
    <main className={main} style={{ width: "1200px" }}>
      <div>
        <Events></Events>
      </div>
      <div className={"col-start-2 col-end-4 bg-white" + borders}>
        <div className={typography.headerBig + "text-center"}>
          How to contribute to Swiss League?
        </div>
      </div>
      <div>
        <Leaderboard
          display={"array"}
          array={[
            ["allTime", "nbWins"],
            ["allTime", "participation"],
            ["allTime", "points"],
          ]}
        ></Leaderboard>
      </div>
    </main>
  );
}

export default Contribute;
