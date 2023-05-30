"use client";

import { useEffect, useState } from "react";
import Event from "./Event";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./api/tournament/recent", {
          cache: "no-store",
        });

        const data = await response.json();

        setEvents(data);
      } catch (error) {
        setEvents([]);
      }
    };

    fetchData();
    const intervalID = setInterval(fetchData, 10000);

    return () => clearInterval(intervalID);
  }, []);

  const addEvents = () => {
    if (events.error) {
      return "";
    }

    let ans = [];
    const key = 0;

    let futureEvents = events.filter((event) => event.status == "created");
    if (futureEvents.length > 0) {
      ans.push(<p className="text-l">Future Events</p>);
    }

    futureEvents.map((tournamentData) => {
      ans.push(
        <Event key={tournamentData.id} tournamentData={tournamentData}></Event>
      );
    });

    let ongoingEvents = events.filter((event) => event.status == "started");
    if (ongoingEvents.length > 0) {
      ans.push(<p className="text-l">Ongoing Events</p>);
    }

    ongoingEvents.map((tournamentData) => {
      ans.push(
        <Event key={tournamentData.id} tournamentData={tournamentData}></Event>
      );
    });

    let finishEvents = events.filter((event) => event.status == "finished");
    if (finishEvents.length > 0) {
      ans.push(<p className="text-l">Previous Events</p>);

      ans.push(
        <Event
          key={finishEvents[0].id}
          tournamentData={finishEvents[0]}
        ></Event>
      );
    }

    return ans;
  };

  return <div className="w-full text-center">{addEvents(events)}</div>;
}

export default Events;
