import React from "react";
import { taskContext } from "../context/taskContext";

const TodoTaskCell = () => {

    const context = React.useContext(taskContext);

    return (
        <div className="task">
            <div className="taskContent">
                <span>
                    {context.data?.taskName}
                </span>
                <span>
                    {context.data?.deadline}
                </span>
            </div>
            <button
                onClick={_ => {
                    if (context.onCompleteTask && context.data) {
                        context.onCompleteTask(context.data);
                    }
                }}>
                X
            </button>
        </div>
    );
}

export default TodoTaskCell;
