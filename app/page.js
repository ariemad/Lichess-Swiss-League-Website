import BlogPost from "@/components/Blog/BlogPost";
import Events from "@/components/Events";
import Leaderboard from "@/components/Leaderboard";
import { main } from "@/style/style";

export default function Home() {
  return (
    <main className={main} style={{ width: "1200px" }}>
      <div>
        <Events></Events>
      </div>
      <div className="col-span-2">
        <BlogPost last={true}></BlogPost>
      </div>
      <div className="col-start-4">
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
