import type { Theme } from "../App";


type TaskItemProps = {
    id: string;
    title: string;
    done: boolean;
    handleRemoveTasks: (id: string) => void;
    theme: Theme;
    
}

export default function TaskItem({id, title, done, handleRemoveTasks, theme}: TaskItemProps) {
  
  const handleRemove = () => {
    handleRemoveTasks(id)
  }
  
  return (
    <div className="task_item" style={{borderColor: (done ? 'green' : 'red')}}>
      <h2>{title}</h2>
      {/* <p>{done + ''}</p> */}
      <p>{done ? 'Выполнена' : 'Не выполнена'}</p>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}