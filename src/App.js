import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();
function App() {
  console.log("Render APP");
  const [theme, setTheme] = useState("grey");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={10} />
      Counter HOOKS
      <CounterHooks initialCount={20} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "grey" ? "blue" : "grey";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
