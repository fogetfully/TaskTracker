import TaskItem from "./TaskItem";
import type { Task } from "../App";

import { useContext, useEffect } from "react"
import { TaskContext } from "../context/TaskContext"
import { ThemeContext } from "../context/ThemeContext"

// import type { Theme } from "../App";


type TaskListProps = {
    tasks: Task[];
    // handleRemoveTask: (id: string) => void;
    // handleChangeTask: (id: string) => void;
    // theme: Theme;
}


export default function TaskList({ tasks }: TaskListProps) {
    const theme_context = useContext(ThemeContext);
    if (!theme_context) {
        throw new Error("Header must be rendered inside ThemeContext.Provider");
    }
    const context = useContext(TaskContext)

    return (
        <div className={`task-list theme-${theme_context.theme}`}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    done={task.done}
                // handleRemoveTasks={handleRemoveTask}
                // handleChangeTask={handleChangeTask}
                // theme={theme}
                // count={defacultTasks.length} 
                />
            ))}
        </div>
    )
}
