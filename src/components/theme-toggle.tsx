import { Moon, Sun } from "lucide-react"
import useTheme from "@/hooks/use-theme"

function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    const handleClick = () => {
        if (theme !== "dark") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <button className="relative w-auto h-full"
            onClick={handleClick} >
            <Moon
                className="w-auto h-full scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
            />
            <Sun
                className="absolute w-auto h-full top-0 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
            />
        </button>
    )
}

export default ToggleTheme
