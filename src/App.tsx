import React from "react";
import { AppProvider } from "./store";
import createRoutes from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./themes/DefaultTheme/DefaultTheme";
import "./App.css";
import "./icons/_fontawesome-all.scss"
const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>{createRoutes()}</ThemeProvider>
    </AppProvider>
  );
};

export default App;