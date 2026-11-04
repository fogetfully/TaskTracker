import TaskList from "./components/TaskList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

import { useState } from "react";

export type Task = {
  id: string;
  title: string;
  done: boolean;
}
export type Theme = "light" | "dark";



export default function App() {

  const defacultTasks: Task[] = [
    { id: "1", title: "Task 1", done: false },
    { id: "2", title: "Task 2", done: true },
    { id: "3", title: "Task 3", done: false },
    { id: "4", title: "Task 4", done: true },
  ]

  const [tasks, setTasks] = useState(defacultTasks)
  const [theme, setTheme] = useState<Theme>("light")

  const addNewTask = (title: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      done: false,
    }
    setTasks([...tasks, newTask])
  }
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const handleRemoveTask = (id: string) => {
    const filered = tasks.filter((task) => task.id !== id)
    setTasks(filered)
  }
  const handleChangeTask = (id:string) => {
    setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
  }

  return (
    <div className={`main theme-${theme}`}>
      <Header theme={theme} ToggleTheme={handleToggleTheme} />
      <AddForm addNewTask={addNewTask} theme={theme} />
      <TaskList 
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleChangeTask={handleChangeTask} 
        theme={theme} />
    </div>
  )
}
