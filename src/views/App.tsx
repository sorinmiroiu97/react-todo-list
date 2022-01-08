import React, { ChangeEvent } from 'react';
import { ITask } from '../model/ITask';
import '../styles/index.css';
import TodoTask from './TodoTask';

const App: React.FC = () => {

  const [task, setTask] = React.useState<string>('');
  const [deadline, setDeadline] = React.useState<number>(Number.NaN);
  const [todoList, setTodoList] = React.useState<ITask[]>([]);

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let changedValue = event.target.value;
    if (event.target.name === 'task') {
      setTask(changedValue);
    } else if (event.target.name === 'deadline') {
      setDeadline(Number(changedValue) ?? 0);
    }
  }

  const onAddTask = (): void => {
    const newTask: ITask = {
      taskName: task,
      deadline: deadline
    };
    setTodoList([...todoList, newTask]);

    onClear();
  }

  const onClear = (): void => {
    setTask('');
    setDeadline(Number.NaN);
  }

  const completeTask = (taskNameToDelete: string): void => {
    const filteredTodoList = todoList.filter((task: ITask) => {
      return task.taskName !== taskNameToDelete;
    });
    setTodoList(filteredTodoList);
  }

  return (
    <div className="appMain">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            onChange={onHandleChange}
          />
          <input
            type="number"
            placeholder="Deadline (days)"
            name="deadline"
            value={deadline}
            onChange={onHandleChange}
          />
        </div>
        <button
          onClick={onAddTask}
        >
          Add task
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask
            task={task}
            completeTask={completeTask}
            key={key}
          />
        })}
      </div>
    </div>
  );
}

export default App;

/*
// REACT createContext/useContext example (render <TestParent /> somewhere)

interface ITestModel {
  fullname: string;
  age: number;
}

interface ITestModelContext {
  data: ITestModel;
}

const testModelContext = React.createContext<Partial<ITestModelContext>>({});

const TestParent = () => {
  return (
    <testModelContext.Provider value={{ data: { fullname: 'dsf', age: 12 } }}>
      <TestChild />
    </testModelContext.Provider >
  );
}

const TestChild = () => {

  const context = React.useContext(testModelContext);

  return (
    <div>
      <p>
        {context.data?.fullname}
      </p>
      <p>
        {context.data?.age}
      </p>
      <button
        onClick={() => {
          if (context.data?.age !== null && context.data?.age) {
            context.data.age++;
          }
          //alert(context.data?.age);
        }}>
        increment me
      </button>
    </div>
  );
}

*/