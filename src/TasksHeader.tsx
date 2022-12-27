import { useAppSelector, useAppDispatch } from './App/hook';

interface Task {
    id: number,
    done: boolean,
    text: string
}

const TasksHeader = () => {
  const todo = useAppSelector((state) => state.todo.value)
  const undoneTasks = todo.filter((t : Task) => t.done === false);

  return (
    <header >
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
