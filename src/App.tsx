import TaskList from "./components/TaskList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

import { fetchTodos } from "./api/task.api";
import { TaskContext } from "./context/TaskContext";
import { ThemeContext, type Theme } from "./context/ThemeContext";
import { useEffect, useState } from "react";

export type Task = {
  id: string;
  title: string;
  done: boolean;
}

export default function App() {

  const defacultTasks: Task[] = [
    { id: "1", title: "Task 1", done: false },
    { id: "2", title: "Task 2", done: true },
    { id: "3", title: "Task 3", done: false },
    { id: "4", title: "Task 4", done: true },
  ]

  const [tasks, setTasks] = useState(defacultTasks)
  const [theme, setTheme] = useState<Theme>("light")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const addNewTask = (title: string) => {
    const newTask = {
      id: String(Date.now()),
      title,
      done: false,
    }
    setTasks([...tasks, newTask])
  }


  const handleRemoveTask = (id: string) => {
    const filered = tasks.filter((task) => task.id !== id)
    setTasks(filered)
  }

  const handleChangeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }

  async function load() {
    setStatus('loading');
    try {
      const items = await fetchTodos();
      setTasks(items.map(({ id, title, completed }) => ({
        id: String(id),
        title,
        done: completed,
      })));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <TaskContext.Provider value={{ handleChangeTask, handleRemoveTask }}>
        <div className={`main theme-${theme}`}>
          <Header />
          <AddForm addNewTask={addNewTask} />
          {status === "success" &&
            <TaskList tasks={tasks} />
          }
          {status === "loading" &&
            <h2>...</h2>
          }
        </div>
      </TaskContext.Provider>
    </ThemeContext.Provider>
  )
}
