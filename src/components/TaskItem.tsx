// import type { Theme } from "../App"; 
import { useContext, useEffect } from "react"
import { TaskContext } from "../context/TaskContext"
import { ThemeContext } from "../context/ThemeContext"


type TaskItemProps = {
  id: string;
  title: string;
  done: boolean;
  // handleRemoveTasks: (id: string) => void;
  // handleChangeTask: (id: string) => void;
  // theme: Theme;

}

export default function TaskItem({ id, title, done }: TaskItemProps) {
  const theme_context = useContext(ThemeContext);
  if (!theme_context) {
    throw new Error("Header must be rendered inside ThemeContext.Provider");
  }
  const context = useContext(TaskContext)

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    context?.handleRemoveTask(id)
  }

  const handleChange = () => {
     context?.handleChangeTask(id)
  }

  return (
    <div className={`task-item theme-${theme_context.theme}`}
      // style={{ borderColor: (done ? 'green' : 'red') }}
      onClick={() => handleChange()}>

      <h2 className="task-title">{title}</h2>
      <p>{done ? 'Выполнена' : 'Не выполнена'}</p>
      <button
        className={`theme-${theme_context.theme}`}
        onClick={handleRemove} >
        x
      </button>
    </div>
  )
}