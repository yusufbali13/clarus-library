import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { darktheme, lightheme } from "./styles/theme";
import { useEffect, useState } from "react";

function App() {
  const [myTheme, setMyTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  );
  const [themes, setThemes] = useState(lightheme);

  useEffect(() => {
    sessionStorage.setItem("theme", myTheme);
    setThemes(myTheme === "light" ? lightheme : darktheme);
  }, [myTheme]);
  return (
    <ThemeProvider theme={themes}>
      <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />
    </ThemeProvider>
  );
}

export default App;
