import React from "react";
import { NumericFormat } from "react-number-format";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function InfoCard({ name, value, icon }) {
  return (
    <Box
      sx={{ display: "flex", borderRadius: 2, boxShadow: 2, p: 2, width: 180 }}
    >
      {icon}
      <Box sx={{ textAlign: "center" }}>
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
    </Box>
  );
}
