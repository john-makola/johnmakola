import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#d4d4d4",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#0a1930" : "#013332",
  },
}));

export function ProgressBar1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress variant="determinate" value={100} />
    </Box>
  );
}

const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#d4d4d4",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#58e0c0" : "#013332",
  },
}));

export function ProgressBar2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <BorderLinearProgress2 variant="determinate" value={100} />
    </Box>
  );
}
