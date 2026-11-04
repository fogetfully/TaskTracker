import type { Theme } from "../App";


type TaskItemProps = {
  id: string;
  title: string;
  done: boolean;
  handleRemoveTasks: (id: string) => void;
  handleChangeTask: (id: string) => void;
  theme: Theme;

}

export default function TaskItem({ id, title, done, handleRemoveTasks, handleChangeTask, theme }: TaskItemProps) {

  const handleRemove = () => {
    handleRemoveTasks(id)
  }

  return (
    <div className="task_item"
      style={{ borderColor: (done ? 'green' : 'red') }}
      onClick={() => handleChangeTask(id)}>

      <h2>{title}</h2>
      <p>{done ? 'Выполнена' : 'Не выполнена'}</p>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}