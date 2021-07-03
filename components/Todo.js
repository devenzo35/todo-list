import { useForm } from "react-hook-form";
import { useCrud } from "../hooks/useCrud";
import Task from "./Task";
import { useState, useEffect } from "react";

const Todo = () => {
  const { fetchData, postData } = useCrud("http://localhost:3001/tasks");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [tasks, setTasks] = useState([]);

  const { loading, data } = fetchData();

  useEffect(() => {
    if (loading) {
      return;
    }

    setTasks(data);
  }, [data]);

  const onSubmit = (data) => {
    postData("post", data);
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
          {...register("task", {
            required: true,
          })}
        ></input>
      </form>
      <ul className="flex flex-col justify-around gap-2 items-center h-full">
        {loading ? (
          <h1>loading...</h1>
        ) : tasks.length ? (
          tasks.map(({ id, task }) => {
            return (
              <Task
                register={register}
                handleSubmit={handleSubmit}
                postData={postData}
                key={id}
                task={task}
                id={id}
              />
            );
          })
        ) : (
          <p>There is no tasks yet :(</p>
        )}
      </ul>
    </div>
  );
};

export default Todo;
