import React, { ChangeEvent } from 'react';
import { inputContainerContext } from '../context/inputContainerContext';
import { taskContext } from '../context/taskContext';
import { ITask } from '../model/ITask';
import '../styles/index.css';
import InputContainer from './InputContainer';
import TodoTaskCell from './TodoTaskCell';

const App: React.FC = () => {

  const [task, setTask] = React.useState<string>('');
  const [deadline, setDeadline] = React.useState<number>(0);
  const [todoList, setTodoList] = React.useState<ITask[]>([]);

  const makeCurrentTask = (): ITask => {
    const currentTask: ITask = {
      taskName: task,
      deadline: deadline
    };
    return currentTask;
  }

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let changedValue = event.target.value;
    if (event.target.name === 'task') {
      setTask(changedValue);
    } else if (event.target.name === 'deadline') {
      setDeadline(Number(changedValue) ?? 0);
    }
  }

  const onAddTask = (): void => {
    const newTask = makeCurrentTask();
    setTodoList([...todoList, newTask]);

    onClear();
  }

  const onClear = (): void => {
    setTask('');
    setDeadline(Number.NaN);
  }

  const onCompleteTask = (task: ITask): void => {
    const filteredTodoList = todoList.filter((listTask: ITask) => {
      if (task.taskName === listTask.taskName) {
        return task.deadline !== listTask.deadline;
      }
      return task.taskName !== listTask.taskName;
    });
    setTodoList(filteredTodoList);
  }

  return (
    <div className="appMain">
      <inputContainerContext.Provider value={{ data: makeCurrentTask(), onHandleChange: onHandleChange, onAddTask: onAddTask }}>
        <InputContainer key={'inputContainerKey'}/>
      </inputContainerContext.Provider>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <taskContext.Provider value={{ data: task, onCompleteTask: onCompleteTask }}>
            <TodoTaskCell key={`todoTaskCellKey-${key}`} />
          </taskContext.Provider>
        })}
      </div>
    </div>
  );
}

export default App;