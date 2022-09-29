import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerHeader from "./components/ui/DrawerHeader";
import NavigationMenu from "./components/ui/NavigationMenu";
import theme from "./components/ui/Theme";
import Box from "@mui/material/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <MenuNavigation /> */}
        {/* <Box sx={{ display: "flex" }}> */}
        <NavigationMenu />
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route exact path="/" element={<div>Home</div>} />
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
              <Route
                exact
                path="/incometypes"
                element={<div>Income Types</div>}
              />
              <Route exact path="/merchants" element={<div>Merchants</div>} />
              <Route exact path="/users" element={<div>Users</div>} />
            </Routes>
          </Box> */}
        {/* </Box> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
