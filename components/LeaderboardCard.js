import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { borders, typography } from "@/style/style";

function LeaderboardCard({ time, category, stats }) {
  const dictTime = {
    allTime: "All Time",
    monthly: "Monthly",
    weekly: "Weekly",
  };

  const dictCategory = {
    nbWins: "Tournament Wins",
    avgRank: "Average Rank",
    avgPerformance: "Average Performance",
    participation: "Participations",
    points: "Points",
  };

  let timeString = dictTime[time];
  let categoryString = dictCategory[category];

  return (
    <div className={"border mb-4 bg-white" + borders}>
      <h3 className={"text-center p-2" + typography.header}>
        {timeString + " - " + categoryString}
      </h3>
      <TableContainer sx={{ overflow: "visible" }}>
        <Table sx={{}} aria-label="simple table">
          <TableBody>
            {stats.map((player, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center" size="small">
                  <strong className=" text-ellipsis">{player[0]}</strong>
                </TableCell>
                <TableCell align="right">{player[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LeaderboardCard;
