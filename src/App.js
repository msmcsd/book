import { ThemeProvider } from "@mui/system";

import Header from "./components/ui/Header";
import MiniDrawer from "./components/ui/MiniDrawer";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MiniDrawer />
    </ThemeProvider>
  );
}

export default App;
