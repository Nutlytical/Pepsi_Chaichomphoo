import React from "react";

import Copyright from "./CopyrightComponent";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export default function Footer() {
  return (
    <Box>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center" color="secondary">
            Wish You choose the right side.
          </Typography>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </Box>
  );
}
