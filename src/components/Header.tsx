import type { Theme } from "../App";

type HeaderProps = {
    theme: Theme;
    ToggleTheme: () => void;
}

export default function Header({ theme, ToggleTheme }: HeaderProps) {
    return (
        <header className={`header theme-${theme}`}>
            <h2>Task Tracker</h2>
            <button
                className={`theme-${theme}`}
                onClick={ToggleTheme}>
                Текущая тема: {theme}
            </button>
            {/* <label>
                <input
                    type="checkbox"
                    role="switch"
                    onChange={ToggleTheme }
                />
                Темная тема
            </label> */}
        </header>
    )
}