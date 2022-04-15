import React, { FC } from "react";
import TaskTemplate from "./Task";

interface Task {
  id: number | string;
  task: string;
}
interface TasksProps {
  DeleteTask: (id: number | string) => void;
  EditList: (task: Task) => void;
  tasks: Task[];
}

const Tasks: FC<TasksProps> = ({ tasks, DeleteTask, EditList }) => {
  return (
    <div>
      <div className="tasks">
        {tasks.length === 0 ? (
          <h1 style={{ color: "white", textAlign: "center" }}>Not to do</h1>
        ) : (
          tasks.map((task, index) => {
            return (
              <TaskTemplate
                index={index}
                key={index}
                tasks={task}
                DeleteTask={DeleteTask}
                EditList={EditList}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Tasks;
