// themeConfig.js
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme } from "@mui/material/styles";

const themeConfig = (themeMode: boolean) =>
  createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",
      primary: {
        main: themeMode ? "#000" : "#fff",
      },
      secondary: {
        main: themeMode ? "#fff" : "rgb(16, 20, 24)",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

export default themeConfig;
