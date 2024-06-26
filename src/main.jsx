import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/default.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
