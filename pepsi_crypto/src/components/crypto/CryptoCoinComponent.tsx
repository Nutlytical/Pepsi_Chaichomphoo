import * as React from "react";
import { useRouter } from "next/router";
import HTMLReactParser from "html-react-parser";
import millify from "millify";

import { CryptoCoinLineChart } from "components";
import Link from "Link";
import { cryptoCoinApi, cryptoCoinHistoryApi } from "services/cryptoApi";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

export default function CryptoCoinComponent() {
  const [timePeriod, setTimePeriod] = React.useState("1y");

  const { coinId } = useRouter().query;
  const { cryptoCoin, isCryptoCoinLoading, isCryptoCoinError } =
    cryptoCoinApi(coinId);
  const {
    cryptoCoinHistory,
    isCryptoCoinHistoryLoading,
    isCryptoCoinHistoryError,
  } = cryptoCoinHistoryApi(coinId, timePeriod);

  const coin = cryptoCoin?.data?.coin;
  const coinHistory = cryptoCoinHistory?.data;

  const times = ["24h", "7d", "30d", "1y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin.price)}`,
      icon: <MonetizationOnOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "Rank",
      value: coin?.rank,
      icon: <Grid3x3OutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "24h Volume",
      value: `$ ${coin?.volume && millify(coin.volume)}`,
      icon: <BoltOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin.marketCap)}`,
      icon: <LocalAtmOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${coin?.allTimeHigh && millify(coin.allTimeHigh.price)}`,
      icon: <CelebrationOutlinedIcon sx={{ mr: 1 }} />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: <AccountBalanceOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: <AccountBalanceWalletOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "Approved Supply",
      value: coin?.approvedSupply ? (
        <CheckOutlinedIcon />
      ) : (
        <CloseOutlinedIcon />
      ),
      icon: <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "Total Supply",
      value: `$ ${coin?.totalSupply && millify(coin.totalSupply)}`,
      icon: <AutoAwesomeOutlinedIcon sx={{ mr: 1 }} />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${coin?.circulatingSupply && millify(coin.circulatingSupply)}`,
      icon: <AutoAwesomeOutlinedIcon sx={{ mr: 1 }} />,
    },
  ];

  if (isCryptoCoinLoading || isCryptoCoinHistoryLoading)
    return <div>loading</div>;
  if (isCryptoCoinError || isCryptoCoinHistoryError)
    return <div>failed to load</div>;

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom component="div">
        {coin?.name} ({coin?.slug}) Price
      </Typography>
      <Typography align="center" gutterBottom component="div">
        {coin?.name} live price in US Dollar (USD). View value statistics,
        market cap and supply.
      </Typography>

      <CryptoCoinLineChart
        coinHistory={coinHistory}
        currentPrice={coin?.price}
        coinName={coin?.name}
        times={times}
        setTimePeriod={setTimePeriod}
      />

      <Box sx={{ width: "100%", mt: 3, mb: 3 }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">{coin?.name} Value Statistics</Typography>
            <Typography variant="caption">
              An overview showing the statistics of {coin?.name}, such as the
              base and quote currency, the rank, and trading volume.
            </Typography>

            {stats.map(({ icon, title, value }, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  m: 2,
                  alignItems: "center",
                }}
              >
                <Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                    color="text.secondary"
                  >
                    {icon}
                    {title}
                  </Box>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {value}
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Other Stats Info</Typography>
            <Typography variant="caption">
              An overview showing the statistics of {coin?.name}, such as the
              base and quote currency, the rank, and trading volume.
            </Typography>

            {genericStats.map(({ icon, title, value }, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "95%",
                  m: 2,
                  alignItems: "center",
                }}
              >
                <Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                    color="text.secondary"
                  >
                    {icon}
                    {title}
                  </Box>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {value}
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h5">What is {coin?.name}?</Typography>
            <Typography variant="caption">
              {coin?.description && HTMLReactParser(coin.description)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">{coin?.name} Links</Typography>
            {coin?.links.map((link: any, index: number) => (
              <>
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                    m: 2,
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {link.type}
                    </Box>
                  </Typography>
                  <Link href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </Link>
                </Box>
              </>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
