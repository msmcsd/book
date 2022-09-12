import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header() {
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar>Hello</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
