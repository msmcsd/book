import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

import { Link } from "react-router-dom";

import DrawerHeader from "./DrawerHeader";
import LeftDrawer from "./LeftDrawer";

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

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

export default function NavigationMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const DashboardMenuItems = [
  //   { name: "Dashboard", icon: <DashboardIcon />, link: "/" },
  //   { name: "Expenses", icon: <ShoppingCartIcon />, link: "/expenses" },
  //   { name: "Income", icon: <PaidIcon />, link: "/income" },
  //   { name: "Yearly Summary", icon: <SummarizeIcon />, link: "/yearlysummary" },
  // ];

  // const SettingsMenuItems = [
  //   {
  //     name: "Expense Types",
  //     icon: <ShoppingCartIcon />,
  //     link: "/expensetypes",
  //   },
  //   { name: "Income Types", icon: <PaidIcon />, link: "/incometypes" },
  //   { name: "Merchants", icon: <StorefrontIcon />, link: "/merchants" },
  //   { name: "Users", icon: <GroupIcon />, link: "/users" },
  // ];

  // function MenuList(props) {
  //   return (
  //     <List>
  //       {props.menus.map((menu) => (
  //         <ListItem
  //           key={menu.name}
  //           onClick={handleDrawerClose}
  //           disablePadding
  //           sx={{ display: "block" }}
  //           component={Link}
  //           to={menu.link}
  //         >
  //           <ListItemButton
  //             sx={{
  //               minHeight: 48,
  //               justifyContent: open ? "initial" : "center",
  //               px: 2.5,
  //             }}
  //           >
  //             <ListItemIcon
  //               sx={{
  //                 minWidth: 0,
  //                 mr: open ? 3 : "auto",
  //                 justifyContent: "center",
  //               }}
  //             >
  //               {menu.icon}
  //             </ListItemIcon>
  //             <ListItemText
  //               primary={menu.name}
  //               sx={{ opacity: open ? 1 : 0 }}
  //             />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   );
  // }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{ flex: 1 }}>
            Mini variant drawer
          </Typography>
          <Button color="inherit" startIcon={<LockIcon />}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuList menus={DashboardMenuItems} />
        <Divider />
        <MenuList menus={SettingsMenuItems} />
      </Drawer> */}
      <LeftDrawer {...{ open, setOpen }} />
    </Box>
  );
}
