import React from "react";
import { inputContainerContext } from "../context/inputContainerContext";

const InputContainer: React.FC = () => {

    const context = React.useContext(inputContainerContext);

    return (
        <div className="header">
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Task"
                    name="task"
                    value={context.data?.taskName}
                    onChange={context.onHandleChange} />
                <input
                    type="number"
                    placeholder="Deadline (days)"
                    name="deadline"
                    value={context.data?.deadline}
                    onChange={context.onHandleChange} />
            </div>
            <button
                onClick={context.onAddTask} >
                Add task
            </button>
        </div>
    );
}

export default InputContainer;