import React from "react";
import millify from "millify";

import { CryptoCoins, CryptoNews } from "components";
import Link from "Link";

import { cryptoStatsApi } from "services/cryptoApi";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function CryptoHome() {
  const { cryptoStats, isCryptoStatsLoading, isCryptoStatsError } =
    cryptoStatsApi();

  const stats = cryptoStats?.data;

  if (isCryptoStatsLoading) return <div>loading</div>;
  if (isCryptoStatsError) return <div>failed to load</div>;

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Global Crypto Stats
      </Typography>
      <Box sx={{ width: "100%", mt: 3, mb: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="caption">Total Coins</Typography>
            <Typography> {millify(stats.totalCoins)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Total Markets</Typography>
            <Typography>{millify(stats.totalMarkets)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Total Exchanges</Typography>
            <Typography>{millify(stats.totalExchanges)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Total MarketCap</Typography>
            <Typography>{millify(stats.totalMarketCap)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Total 24h Volume</Typography>
            <Typography>{millify(stats.total24hVolume)}</Typography>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <Box sx={{ width: "100%", mt: 3, mb: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom component="div">
              Top 10 Cryptos In The World
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom component="div" align="right">
              <Link href="/coins">Show more</Link>
            </Typography>
          </Grid>
        </Grid>
        <CryptoCoins sliceLastIndex={10} />
      </Box>
      <hr />
      <Box sx={{ width: "100%", mt: 3, mb: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom component="div">
              Latest Crypto News
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom component="div" align="right">
              <Link href="/news">Show more</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <CryptoNews sliceLastIndex={12} />
    </>
  );
}
