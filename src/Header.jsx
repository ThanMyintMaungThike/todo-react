import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Header() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        margin: "20px 0px",
        border: "2px solid gray",
      }}
    >
      <b>App</b>

      {/* <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode === "light" ? "Dark" : "Light"}
      </button> */}

      {mode === "light" ? (
        <button onClick={() => setMode("dark")}> Dark </button>
      ) : (
        <button onClick={() => setMode("light")}> Light</button>
      )}
    </nav>
  );
}
