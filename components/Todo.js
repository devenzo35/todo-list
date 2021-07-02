import { useCrud } from "../hooks/useCrud";
import Button from "../components/Button";
import Task from "./Task";

const Todo = () => {
  // TODO: useEffect
  const { data, loading } = useCrud("get", "http://localhost:3001/tasks");

  if (loading) return <h1>loading...</h1>;

  return (
    <div className="border rounded-lg w-3/6 h-max m-auto p-3">
      <input
        className="border-b w-full p-1 mb-4"
        type="text"
        name="add task"
        placeholder="Add a task"
      ></input>
      <ul className="flex flex-col justify-around gap-2 items-center h-full">
        {data.map(({ id, task }) => {
          return <Task key={id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default Todo;
