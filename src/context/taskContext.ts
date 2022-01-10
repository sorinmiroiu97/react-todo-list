import React from "react"
import { ITask } from "../model/ITask"

export interface ITaskContext {
    data: ITask;
    onCompleteTask(task: ITask): void;
}

export const taskContext = React.createContext<Partial<ITaskContext>>({});