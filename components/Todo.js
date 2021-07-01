import { useCrud } from "../hooks/useCrud";
import Button from "../components/Button";

const Todo = () => {
  // TODO: useEffect
  const { data, loading } = useCrud("get", "http://localhost:3001/tasks");

  if (loading) return <h1>loading...</h1>;

  return (
    <div className="bg-gray-700 rounded-lg w-3/6 h-80 m-auto p-3">
      <ul className="flex flex-col justify-around items-center h-full">
        {data.map(({ id, task }) => {
          return (
            <li className="bg-white w-full p-2 rounded-sm" key={id}>
              {task}
            </li>
          );
        })}
      </ul>
      <Button render={() => <button>Create task</button>} />
    </div>
  );
};

export default Todo;
