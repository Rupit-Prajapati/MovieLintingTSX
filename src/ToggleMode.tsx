import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDarkMode } from "./DarkMode";
import { Typography } from "@mui/material";

type DarkModeType = {
  toggleDarkMode: () => void;
  themeMode: boolean;
};

const ToggleMode: React.FC = () => {
  const { toggleDarkMode, themeMode }: DarkModeType = useDarkMode();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4"> Movie Listing</Typography>
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
        {themeMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default ToggleMode;
