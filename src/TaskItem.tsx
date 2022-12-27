import React from "react";
import {toggleTask, deleteTask} from './feature/todoSlice';
import { useAppSelector, useAppDispatch } from './App/hook';

interface Task {
    task: {
        id: number,
        done: boolean,
        text: string
    }
}

const TaskItem = ({task} : Task) => {
  const dispatch = useAppDispatch();
 

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
