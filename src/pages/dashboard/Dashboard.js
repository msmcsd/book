import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import PaidIcon from "@mui/icons-material/Paid";

import YearToDateCard from "./InfoCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Dashboard({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);

  const DashboardCards = [
    {
      name: "YTD Saving",
      value: 500,
      icon: <PaidIcon />,
    },
    {
      name: "YTD Expense",
      value: 1500,
      icon: <ShoppingCartIcon />,
    },
    {
      name: "YTD Income",
      value: 1000,
      icon: <PaidIcon />,
    },
  ];
  const BalanceCards = [
    {
      name: "Beginning Balance",
      value: 10000,
    },
    {
      name: "Current Balance",
      value: 15000,
    },
  ];

  return (
    <>
      <Box sx={{ display: { md: "flex", xs: "grid" } }}>
        {DashboardCards.map((card) => {
          return (
            <YearToDateCard
              {...{ name: card.name, value: card.value, icon: card.icon }}
            />
          );
        })}
      </Box>
      <Box sx={{ display: { md: "flex", xs: "grid" }, mt: 5 }}>
        {BalanceCards.map((card) => {
          return <YearToDateCard {...{ name: card.name, value: card.value }} />;
        })}
      </Box>
    </>
  );
}
