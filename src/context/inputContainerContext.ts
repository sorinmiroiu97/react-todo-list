import React, { ChangeEvent } from "react";
import { ITask } from "../model/ITask";

export interface IContainerInputContext {
    data: ITask;
    onHandleChange(event: ChangeEvent<HTMLInputElement>): void;
    onAddTask(): void;
}

export const inputContainerContext = React.createContext<Partial<IContainerInputContext>>({});
