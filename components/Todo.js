import { useForm } from "react-hook-form";
import { useCrud } from "../hooks/useCrud";
import Task from "./Task";

const Todo = () => {
  // TODO: useEffect
  const { data, loading } = useCrud("get", "http://localhost:3001/tasks");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white border rounded-lg w-3/6 h-min mx-auto p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-b w-full p-1 mb-4"
          type="text"
          name="add task"
          placeholder="Add a task"
          {...register("addTask", {
            required: true,
          })}
        ></input>
      </form>
      <ul className="flex flex-col justify-around gap-2 items-center h-full">
        {loading ? (
          <h1>loading...</h1>
        ) : (
          data.map(({ id, task }) => {
            return <Task key={id} task={task} />;
          })
        )}
      </ul>
    </div>
  );
};

export default Todo;
