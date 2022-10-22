import router from "./router";
import { useRoutes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ThemeProvider from "./theme/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <CssBaseline />
          {content}
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
