import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/use-theme";

function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        if (theme !== "dark") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <button
            type="button"
            className="relative h-full w-auto"
            onClick={handleClick}
        >
            <Moon className="h-full w-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Sun className="dark:-rotate-90 absolute top-0 h-full w-auto rotate-0 scale-100 transition-all dark:scale-0" />
        </button>
    );
}

export default ToggleTheme;
