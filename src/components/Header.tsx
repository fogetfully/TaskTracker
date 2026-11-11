import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Header() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Header must be rendered inside ThemeContext.Provider");
    }

    return (
        <header className={`header theme-${context.theme}`}>
            <h2>Task Tracker</h2>
            <button
                className={`theme-${context.theme}`}
                onClick={context.toggleTheme}
            >
                Включить {context.theme === "light" ? "темную" : "светлую"} тему
            </button>
        </header>
    )
}