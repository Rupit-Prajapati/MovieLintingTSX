import { ThemeProvider } from "@mui/material";
import { ReactNode, createContext, useContext, useState } from "react";
import themeConfig from "./Theme";

interface DarkModeProviderProps {
  children: ReactNode;
}

interface DarkModeContextType {
  toggleDarkMode: () => void;
  themeMode: boolean;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

function DarkModeProvider({ children }: Readonly<DarkModeProviderProps>) {
  const [themeMode, setThemeMode] = useState(false);
  const theme = themeConfig(themeMode);
  const toggleDarkMode = () => {
    setThemeMode(!themeMode);
  };

  const contextValue: DarkModeContextType = {
    toggleDarkMode,
    themeMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeContext, useDarkMode, DarkModeProvider };
