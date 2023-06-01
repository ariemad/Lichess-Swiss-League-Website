"use client";

import { useEffect, useState } from "react";
import LeaderboardCard from "./LeaderboardCard";

function Leaderboard({ display, array }) {
  const [stats, setStats] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./api/player/leaderboard");

        const data = await response.json();

        setStats(data);
      } catch (error) {
        setStats([]);
      }
    };

    fetchData();
  }, []);

  const addContent = (stats) => {
    let ans = [];

    if (stats == undefined || stats.leaderboard == undefined) {
      return ans;
    }

    if (display == "all") {
      for (const time in stats.leaderboard) {
        for (const category in stats.leaderboard[time]) {
          ans.push(
            <LeaderboardCard
              time={time}
              category={category}
              stats={stats.leaderboard[time][category]}
            ></LeaderboardCard>
          );
        }
      }
    } else if (display == "array") {
      for (let i = 0; i < array.length; i++) {
        let time = array[i][0];
        let category = array[i][1];
        ans.push(
          <LeaderboardCard
            time={time}
            category={category}
            stats={stats.leaderboard[time][category]}
          ></LeaderboardCard>
        );
      }
    }

    return ans;
  };

  return <div>{addContent(stats)}</div>;
}

export default Leaderboard;
