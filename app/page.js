import Image from "next/image";
import Nav from "../components/Nav";
import Events from "@/components/Events";
import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  return (
    <main>
      <div>
        <Events></Events>
      </div>
      <div></div>
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
