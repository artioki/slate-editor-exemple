import { ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App.tsx";
import "~/index.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
