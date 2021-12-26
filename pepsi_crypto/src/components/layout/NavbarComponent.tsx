import React from "react";

import Link from "Link";

import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { AppBar } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <Toolbar>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          sx={{
            width: "100%",
            letterSpacing: "4px",
            mt: 4,
            fontWeight: "bold",
          }}
        >
          <Link href="/" color="secondary" sx={{ textDecoration: "none" }}>
            Pepsi&nbsp;Cryptos
          </Link>
        </Typography>
      </Toolbar>
    </>
  );
}
