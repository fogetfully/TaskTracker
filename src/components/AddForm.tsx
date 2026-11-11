import type React from "react"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


type AddFormProps = {
    addNewTask: (title: string) => void;
}

export default function AddForm({ addNewTask }: AddFormProps) {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Header must be rendered inside ThemeContext.Provider");
    }

    const handleAddTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event?.currentTarget.value !== "") {
            addNewTask(event?.currentTarget.value);
            event.currentTarget.value = "";
        }
    }

    return (
        <div className={`add-form theme-${context.theme}`}>
            <h3>Добавить задачу</h3>
            <input
                className={`theme-${context.theme}`}
                onKeyDown={handleAddTask}
            />
        </div>
    )
}