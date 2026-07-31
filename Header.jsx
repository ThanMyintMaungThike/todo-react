export default function Header({ mode, setMode }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <b>App</b>
      {mode === "dark" ? (
        <button onClick={() => setMode("light")}>Light</button>
      ) : (
        <button onClick={() => setMode("dark")}>Dark</button>
      )}
    </nav>
  );
}
