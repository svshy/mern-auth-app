import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <IconButton
      size="sm"
      aria-label="toggle color mode"
      onClick={toggleColorMode}
      variant="ghost"
    >
      {theme === "light" ? (
        <LuMoon onClick={toggleColorMode} />
      ) : (
        <LuSun onClick={toggleColorMode} />
      )}
    </IconButton>
  );
}
