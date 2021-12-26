import React, { useEffect, useState } from "react";
import millify from "millify";

import Link from "Link";

import { cryptoCoinsApi } from "services/cryptoApi";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  sliceLastIndex?: number;
}

export default function CryptoCoins({ sliceLastIndex }: Props) {
  const { cryptoCoins, isCryptoCoinsLoading, isCryptoCoinsError } =
    cryptoCoinsApi();
  const [useCoins, setUseCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoCoins?.data?.coins
      .slice(0, sliceLastIndex)
      .filter((coin: any) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setUseCoins(filteredData);
  }, [searchTerm, cryptoCoins]);

  if (isCryptoCoinsLoading) return <div>loading</div>;
  if (isCryptoCoinsError) return <div>failed to load</div>;
  return (
    <>
      {!sliceLastIndex && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 3, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Search Crypto Coin"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </Box>
      )}
      <Box sx={{ width: "100%", mt: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {useCoins?.map((coin: any) => (
            <Grid item xs={12} sm={6} md={4} key={coin.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardHeader
                  action={
                    <Link
                      href={`/cryptocurrency/coin/${coin.id}`}
                      sx={{ textDecoration: "none" }}
                      color="text.primary"
                    >
                      <Avatar src={coin.iconUrl} alt={coin.name} />
                    </Link>
                  }
                  title={
                    <Link
                      href={`/cryptocurrency/coin/${coin.id}`}
                      sx={{ textDecoration: "none" }}
                      color="text.primary"
                    >
                      <Typography>{`${coin.rank}. ${coin.name}`}</Typography>
                    </Link>
                  }
                />
                <div style={{ marginLeft: "16px", marginRight: "16px" }}>
                  <hr />
                </div>
                <CardContent>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 14 }}
                    color="text.secondary"
                  >
                    Price: {millify(coin.price)}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 14 }}
                    color="text.secondary"
                  >
                    Market Cap: {millify(coin.marketCap)}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 14 }}
                    color="text.secondary"
                  >
                    Daily Change: {millify(coin.change)}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
