import { Moon, Sun } from "lucide-react";
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 mb-4 rounded-full bg-zinc-200 dark:bg-zinc-700 text-sm shadow hover:opacity-80 transition flex items-center gap-2"
        >
            {theme === 'dark' ? (
                <>
                    <Sun className="w-4 h-4" />
                    <span>Modo Claro</span>
                </>
            ) : (
                <>
                    <Moon className="w-4 h-4" />
                    <span>Modo Escuro</span>
                </>
            )}
        </button>
    );
};

export default ThemeToggle;