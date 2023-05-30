import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    <div className="border rounded-md border-gray-950 mb-4">
      <h3 className="text-center p-2">{timeString + " - " + categoryString}</h3>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableBody>
            {stats.map((player, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  <strong>{player[0]}</strong>
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
