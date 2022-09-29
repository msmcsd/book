import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";

export default function Dashboard({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <Box>Dashboard</Box>;
}
