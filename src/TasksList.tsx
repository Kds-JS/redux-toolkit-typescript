import TaskItem from "./TaskItem";
import { useAppSelector, useAppDispatch } from './App/hook';


const TasksList = () => {
  const tasks = useAppSelector((state) => state.todo.value)
  

  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
