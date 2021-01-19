import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import { Header } from "./components/header";
import { Jobs } from "./components/jobs";
import Toggle from "./styles/Toggle";

import { useDarkMode } from "./hooks/useDarkMode";
function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Jobs />
    </ThemeProvider>
  );
}

export default App;
