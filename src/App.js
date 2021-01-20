import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import { Header } from "./components/header";
import { Jobs } from "./components/jobs";
import Toggle from "./styles/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";
const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <GlobalStyle />
        <Header />
        <Toggle theme={theme} toggleTheme={toggleTheme} />

        <Route exact path="/" component={Jobs} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
