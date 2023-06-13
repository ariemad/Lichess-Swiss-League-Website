import BlogPost from "@/components/Blog/BlogPost";
import Events from "@/components/Events";
import Leaderboard from "@/components/Leaderboard";
import { main } from "@/style/style";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="  ">
        <Events></Events>
      </div>
      <div
        className={
          " col-start-2 col-span-2 row-span-full" + " max-md:col-start-1"
        }
      >
        <BlogPost last={true}></BlogPost>
      </div>
      <div className="self-start ">
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
