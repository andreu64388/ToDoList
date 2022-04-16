import React, { ChangeEvent, FC, useState } from "react";

interface Task {
  id: number | string;
  task: string;
}
interface Props {
  state: Task;
  tasks: Task[];
  setTasksFun: (n: any) => void;
  ChangeState: () => void;
}
const Modal: FC<Props> = ({ state, tasks, setTasksFun, ChangeState }) => {
  const [value, setValue] = useState<string>(state.task);

  const handleSave = () => {
    const result = tasks.map((tasks, index) => {
      if (tasks.id === state.id) {
        return { ...tasks, task: value };
      } else {
        return tasks;
      }
    });
    console.log(result);
    setTasksFun(result);
    ChangeState();
  };
  const Keys = (e: any) => {
    if (e.key === "Enter") {
      handleSave();
    }
  }
  return (
    <div className="modal">



      <div className="forms">
        <div className="osnova">
          <h1>Edit</h1>

          <input
            onKeyDown={Keys}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            type="text"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
