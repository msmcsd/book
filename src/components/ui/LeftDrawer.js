import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PaidIcon from "@mui/icons-material/Paid";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

import DrawerHeader from "./DrawerHeader";
import Dashboard from "../../pages/dashboard/Dashboard";
import Expenses from "../../pages/expenses/Expenses";
import Income from "../../pages/income/Income";
import YearlySummary from "../../pages/yearlysummary/YearlySummary";

import ExpenseTypes from "../../pages/expensetypes/ExpenseTypes";
import IncomeTypes from "../../pages/incometypes/IncomeTypes";
import Merchants from "../../pages/merchants/Merchants";
import Users from "../../pages/users/Users";
import { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function LeftDrawer({ open, setOpen }) {
  const theme = useTheme();

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const [selectedLink, setSelectedLink] = useState("");

  const DashboardMenuItems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/",
      component: <Dashboard {...{ setSelectedLink, link: "/" }} />,
    },
    {
      name: "Expenses",
      icon: <ShoppingCartIcon />,
      link: "/expenses",
      component: (
        <Expenses {...{ setSelectedLink, link: "/expensesexpenses" }} />
      ),
    },
    {
      name: "Income",
      icon: <PaidIcon />,
      link: "/income",
      component: <Income {...{ setSelectedLink, link: "/income" }} />,
    },
    {
      name: "Yearly Summary",
      icon: <SummarizeIcon />,
      link: "/yearlysummary",
      component: (
        <YearlySummary {...{ setSelectedLink, link: "/yearlysummary" }} />
      ),
    },
  ];

  const SettingsMenuItems = [
    {
      name: "Expense Types",
      icon: <ShoppingCartIcon />,
      link: "/expensetypes",
      component: (
        <ExpenseTypes {...{ setSelectedLink, link: "/expensetypes" }} />
      ),
    },
    {
      name: "Income Types",
      icon: <PaidIcon />,
      link: "/incometypes",
      component: <IncomeTypes {...{ setSelectedLink, link: "/incometypes" }} />,
    },
    {
      name: "Merchants",
      icon: <StorefrontIcon />,
      link: "/merchants",
      component: <Merchants {...{ setSelectedLink, link: "/merchants" }} />,
    },
    {
      name: "Users",
      icon: <GroupIcon />,
      link: "/users",
      component: <Users {...{ setSelectedLink, link: "/users" }} />,
    },
  ];

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function MenuList(props) {
    return (
      <List>
        {props.menus.map((menu) => (
          <ListItem
            key={menu.name}
            onClick={() => navigate(menu.link)}
            // onClick={handleDrawerClose}
            disablePadding
            sx={{ display: "block" }}
            // component={Link}
            // to={menu.link}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              // onClick={() => navigate(menu.link)}
              selected={selectedLink === menu.link}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                primary={menu.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuList menus={DashboardMenuItems} />
        <Divider />
        <MenuList menus={SettingsMenuItems} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {[...DashboardMenuItems, ...SettingsMenuItems].map((item) => (
            <Route
              exact
              key={item.name}
              path={item.link}
              element={item.component}
            />
          ))}
          {/* <Route exact path="/" element={<div>Home</div>} />
          <Route exact path="/expenses" element={<div>Expenses</div>} />
          <Route exact path="/income" element={<div>Income</div>} />
          <Route
            exact
            path="/yearlysummary"
            element={<div>Yearly Summary</div>}
          />
          <Route
            exact
            path="/expensetypes"
            element={<div>Expense Types</div>}
          />
          <Route exact path="/incometypes" element={<div>Income Types</div>} />
          <Route exact path="/merchants" element={<div>Merchants</div>} />
          <Route exact path="/users" element={<div>Users</div>} /> */}
        </Routes>
      </Box>
    </>
  );
}
