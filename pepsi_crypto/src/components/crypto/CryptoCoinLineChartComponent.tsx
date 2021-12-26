import React from "react";
import millify from "millify";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  coinHistory: any;
  currentPrice: number;
  coinName: string;
  times: string[];
  setTimePeriod: (e: string) => void;
}

export default function CryptoCoinLineChart({
  coinHistory,
  currentPrice,
  coinName,
  times,
  setTimePeriod,
}: Props) {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.history?.length; i += 14) {
    coinPrice.push(coinHistory?.history[i]?.price);
    coinTimeStamp.push(
      new Date(coinHistory?.history[i]?.timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 2, sm: 3 }}
      sx={{ mt: 3 }}
    >
      <Grid item xs={12} sm={5}>
        <Typography variant="h5">
          {coinName} Price Chart: {coinHistory?.change}%
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="h6" color="text.secondary">
          Current {coinName} Price: $ {currentPrice && millify(currentPrice)}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
        <FormControl sx={{ width: "100%" }}>
          <Select
            value="Select TimePeriod"
            input={<OutlinedInput />}
            onChange={(e) => setTimePeriod(e.target.value)}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Select TimePeriod</em>;
              }

              return selected;
            }}
          >
            <MenuItem disabled value="">
              <em>Select TimePeriod</em>
            </MenuItem>
            {times.map((time: any, index: number) => (
              <MenuItem key={index} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Line options={options} data={data} />
      </Grid>
    </Grid>
  );
}
