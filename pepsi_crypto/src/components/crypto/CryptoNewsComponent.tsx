import React, { useEffect, useState } from "react";
import moment from "moment";

import { cryptoCoinsApi } from "services/cryptoApi";
import { cryptoNewsApi } from "services/newsApi";

import Link from "Link";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

interface Props {
  sliceLastIndex?: number;
}

export default function CryptoNewsComponent({ sliceLastIndex }: Props) {
  const [getCryptoNews, setGetCryptoNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cryptocurrency");

  const { cryptoNews, isCryptoNewsLoading, isCryptoNewsError } =
    cryptoNewsApi(searchTerm);

  const { cryptoCoins, isCryptoCoinsLoading, isCryptoCoinsError } =
    cryptoCoinsApi();

  const coins = cryptoCoins?.data?.coins;

  useEffect(() => {
    const filteredData = cryptoNews?.value
      .slice(0, sliceLastIndex)
      .filter((cryptoNew: any) =>
        cryptoNew.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setGetCryptoNews(filteredData);
  }, [searchTerm, cryptoNews]);

  if (isCryptoNewsLoading || isCryptoCoinsLoading) return <div>loading</div>;
  if (isCryptoNewsError || isCryptoCoinsError) return <div>failed to load</div>;

  const demoImageUrl =
    "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_960_720.jpg";

  return (
    <>
      {!sliceLastIndex && (
        <FormControl sx={{ mt: 3, width: "100%" }}>
          <Select
            value="Select Coin"
            input={<OutlinedInput />}
            onChange={(e) => setSearchTerm(e.target.value)}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return "Select Coin";
              }

              return selected;
            }}
          >
            <MenuItem disabled value="">
              <em>Select Coin</em>
            </MenuItem>
            {coins.map((coin: any) => (
              <MenuItem key={coin.id} value={`${coin.name}`}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <Box sx={{ width: "100%", mt: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {getCryptoNews?.map((cryptoNew: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ minWidth: 275 }}>
                <CardHeader
                  action={
                    <Link href={cryptoNew.url} target="_blank">
                      <Avatar
                        variant="rounded"
                        alt={cryptoNew.name}
                        sx={{ width: 56, height: 56, m: 1 }}
                        src={
                          cryptoNew.image?.thumbnail.contentUrl || demoImageUrl
                        }
                      />
                    </Link>
                  }
                  title={
                    <Typography>
                      <Link
                        href={cryptoNew.url}
                        target="_blank"
                        sx={{ textDecoration: "none" }}
                        color="text.primary"
                      >
                        {cryptoNew.name}
                      </Link>
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 14 }}
                    color="text.secondary"
                  >
                    {cryptoNew.description > 100
                      ? `${cryptoNew.description.substring(0, 100)}...`
                      : cryptoNew.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                      }}
                      color="text.secondary"
                    >
                      <Avatar
                        alt={cryptoNew.provider[0].name}
                        src={
                          cryptoNew.provider[0].image?.thumbnail.contentUrl ||
                          demoImageUrl
                        }
                        sx={{ width: 24, height: 24, mr: 1 }}
                      />
                      {cryptoNew.provider[0].name}
                    </Box>
                    <Typography
                      sx={{ fontSize: "14px" }}
                      color="text.secondary"
                    >
                      {moment(cryptoNew.datePublished)
                        .startOf("second")
                        .fromNow()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
