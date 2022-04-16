import { ChangeEvent, FC, useEffect, useState } from "react";
import { emitKeypressEvents } from "readline";
import Modal from "./Modal";
import Tasks from "./Tasks";

const ToDoList: FC = () => {
  interface Task {
    id: number | string;
    task: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  const [state, setState] = useState<any>();

  const handleClickAdd = () => {
    if (task.length === 0 && task.trim() === "") {
    } else {
      const newTask = {
        id: new Date().getTime(),
        task: task,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const DeleteTask = (n: string | number) => {
    const newTasks = tasks.filter((task) => task.id !== n);
    setTasks(newTasks);
  };
  const EditList = (n: any) => {
    setState(n);

    setIsModal(true);
  };
  const setTasksFun = (n: any) => {
    setTasks(n);
  };
  const ChangeState = () => {
    setIsModal(false);
  };
  const handleClickDel = () => {
    setTasks([]);
  };
  const Keys = (e: any) => {
    if (e.key === "Enter") {
      handleClickAdd();
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="osnova_info">
          {tasks.length === 0 ? (
            <h1>Нет дел</h1>
          ) : (
            <h1>Список дел: {tasks.length}</h1>
          )}
        </div>

        <div className="input_reserch">
          <input
            onKeyDown={Keys}
            type="text"
            placeholder="Description..."
            value={task}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)

            }
          />
          <button onClick={handleClickAdd} >Add</button>
          <button style={{ backgroundColor: "black" }} onClick={handleClickDel}>
            Delete
          </button>
        </div>

        <Tasks tasks={tasks} DeleteTask={DeleteTask} EditList={EditList} />
      </div>
      {isModal && (
        <Modal
          state={state}
          tasks={tasks}
          setTasksFun={setTasksFun}
          ChangeState={ChangeState}
        />
      )}
    </div>
  );
};

export default ToDoList;
