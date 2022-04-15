import React, { FC } from 'react'


interface Task {
  id: number | string;
  task: string;
}

interface Tasks {
  tasks: Task;
  index: number;
  DeleteTask(id: number | string): void;
  EditList(task:Task):void
}
const TaskTemplate: FC<Tasks> = ({ tasks, index, DeleteTask, EditList }) => {
  const { id, task } = tasks;

  const Edit = (n: any) => {
    EditList(n);
  };
  const Delete = (n: any) => {
    DeleteTask(n);
  };

  return (
    <div className="information_task">
      <div className="title_id">
        <p>{index + 1}</p>
      </div>
      <div className="description">{task}</div>
      <div className="buttons">
        <button className="edit" onClick={() => Edit(tasks)}>
          Edit
        </button>
        <button className="delete" onClick={() => Delete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskTemplate;