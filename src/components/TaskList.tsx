import TaskItem from "./TaskItem";
import type { Task } from "../App";
import type { Theme } from "../App";

type TaskListProps = {
    tasks: Task[];
    handleRemoveTask: (id: string) => void;
    handleChangeTask: (id: string) => void;
    theme: Theme;
}


export default function TaskList({tasks, handleRemoveTask, handleChangeTask, theme}: TaskListProps) {

    return (
        <div className={`task-list theme-${theme}`}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    done={task.done}
                    handleRemoveTasks={handleRemoveTask}
                    handleChangeTask={handleChangeTask}
                    theme={theme}
                // count={defacultTasks.length} 
                />
                ))}
        </div>
    )
}
