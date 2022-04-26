import React, { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes/theme";
import { GlobalStyles } from "./components/Themes/global";
import DetailTemplate from "./DetailTemplate";

const queryClient = new QueryClient();
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={<HomePage theme={theme} setTheme={setTheme} />}
            />
            <Route
              path="/:countryId"
              element={<DetailTemplate theme={theme} setTheme={setTheme} />}
            />
          </Routes>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
