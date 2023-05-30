"use client";

import { timeDifference } from "@/utils/timeDiff";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import { useEffect, useState } from "react";

function Event({ tournamentData }) {
  const [startsIn, setStartsIn] = useState(
    timeDifference(tournamentData.startsAt)
  );

  //Update timer every second
  useEffect(() => {
    let intervalID = setInterval(() => {
      setStartsIn(timeDifference(tournamentData.startsAt));
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  //Event Color
  const addColor = () => {
    if (
      tournamentData.status === "created" ||
      tournamentData.status === "started"
    ) {
      return "bg-green-500 ";
    } else if (tournamentData.status === "finished") {
      return "bg-red-300 ";
    }
  };

  const addTimeInfo = () => {
    if (tournamentData.status == "created") {
      if (startsIn > 0) {
        let dur = dayjs.duration(startsIn);
        return (
          <p className="text-xl pt-2">
            Starts in: <strong>{dur.format("mm:ss")}</strong>
          </p>
        );
      } else {
        return (
          <p className="text-xl pt-2">
            Starts in: <strong>00:00</strong>
          </p>
        );
      }
    } else if (tournamentData.status == "started") {
      <p className="text-xl pt-2">
        Round:
        <strong>
          {tournamentData.round} of {tournamentData.nbRounds}
        </strong>
      </p>;
    } else if (tournamentData.status == "finished") {
      let ended;
      let dur = dayjs.duration(-startsIn);
      if (dur.days() > 0) {
        dur.days() == 1
          ? (ended = "1 day ago")
          : (ended = `${dur.days()} days ago`);
      } else if (dur.hours() > 0) {
        dur.hours() == 1
          ? (ended = "1 hour ago")
          : (ended = `${dur.hours()} hours ago`);
      } else if (dur.minutes() > 0) {
        dur.minutes() == 1
          ? (ended = "1 hour ago")
          : (ended = `${dur.minutes()} minutes ago`);
      } else {
        dur.seconds() == 1
          ? (ended = "1 second ago")
          : (ended = `${dur.seconds()} seconds ago`);
      }

      return (
        <p className="text-xl pt-2">
          Ended: <strong>{ended}</strong>
        </p>
      );
    }
  };

  return (
    <div className={addColor() + "h-20 mb-5 rounded-md border-gray-950 border"}>
      <p className="text-xl pt-2">{tournamentData.name}</p>
      {addTimeInfo()}
      {/*       {{startsIn > 0 ? (
        
      ) : (
        ""
      )}} */}
    </div>
  );
}

export default Event;
