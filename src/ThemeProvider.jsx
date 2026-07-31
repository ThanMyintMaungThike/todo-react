import { createContext, useState } from "react";

export default function ThemeProvider() {
  const themeContext = createContext();
  const [mode, setMode] = useState("light");
  <ThemeProvider>
    <App />
  </ThemeProvider>;
}
