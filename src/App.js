import { ThemeProvider } from "@mui/system";

import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Book
    </ThemeProvider>
  );
}

export default App;
