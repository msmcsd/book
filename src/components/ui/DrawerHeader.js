import { styled } from "@mui/material/styles";

// Creates a gap bewteen the botton of AppBar and the first item in the MiniDrawer.

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default DrawerHeader;
