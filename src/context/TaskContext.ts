import { createContext } from "react";

export type TaskContextValue = {
    handleChangeTask: (id: string) => void
    handleRemoveTask: (id: string) => void   
}

export const TaskContext = createContext<TaskContextValue | null>(null)