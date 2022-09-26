import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import MiniDrawer from "./components/ui/MiniDrawer";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <MiniDrawer />
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
          <Route exact path="/incometypes" element={<div>Income Types</div>} />
          <Route exact path="/merchants" element={<div>Merchants</div>} />
          <Route exact path="/users" element={<div>Users</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
