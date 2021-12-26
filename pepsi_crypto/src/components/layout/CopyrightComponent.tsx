import React from "react";

import Typography from "@mui/material/Typography";

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="secondary" align="center" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()}
      &nbsp; Pepsi Chaichomphoo.
    </Typography>
  );
}
