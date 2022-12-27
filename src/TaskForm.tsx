import { useState } from "react";
import {addTask} from './feature/todoSlice';
import { useAppSelector, useAppDispatch } from './App/hook';

const TaskForm = () => {

  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (event : any) => {
    event.preventDefault();

    dispatch(addTask(text));    

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
