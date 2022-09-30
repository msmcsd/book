import React from "react";
import { NumericFormat } from "react-number-format";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function InfoCard({ name, value, icon }) {
  return (
    <Paper
      elevation={3}
      sx={{ display: "flex", p: 2, width: 180 }}
      // sx={{ display: "flex", borderRadius: 2, boxShadow: 2, p: 2, width: 180 }}
    >
      {icon}
      <Box
        sx={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>{name}</Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          {!isNaN(+value) ? (
            <NumericFormat
              value={value}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          ) : (
            "N/A"
          )}
        </Typography>
      </Box>
    </Paper>
  );
}
