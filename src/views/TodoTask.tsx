import React from "react";
import { ITask } from "../model/ITask";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = (props: Props) => {
    return (
        <div className="task">
            <div className="taskContent">
                <span>
                    {props.task.taskName}
                </span>
                <span>
                    {props.task.deadline}
                </span>
            </div>
            <button
                onClick={_ => {
                    props.completeTask(props.task.taskName)
                }}>
                X
            </button>
        </div>
    );
}

export default TodoTask;