import React from "react";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./Components/Home";
import Heading from "./Components/Heading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Heading />
      <Home />
    </ThemeProvider>
  );
}

export default App;
