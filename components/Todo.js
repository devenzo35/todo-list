import { useForm } from "react-hook-form";
import { useCrud } from "../hooks/useCrud";
import Task from "./Task";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const { fetchData, postData } = useCrud("http://localhost:3001/tasks");
  const { register, handleSubmit } = useForm();
  const [tasks, setTasks] = useState([]);

  const { loading, data } = fetchData();

  useEffect(() => {
    if (loading) {
      return;
    }

    setTasks(data);
  }, [data]);

  const addTask = (data) => {
    if (!data.task.length) return;
    const newTask = { ...data, id: uuidv4() };
    postData("post", newTask);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (e, id) => {
    e.stopPropagation();
    postData("delete", {}, "/" + id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleUpdateSubmit = (data, id) => {
    if (!data.task.length) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, task: data.task } : t))
    );
    postData("put", data, "/" + id);
  };

  console.log(tasks);

  return (
    <div className="bg-white border rounded-lg w-3/6 h-min mx-auto p-3">
      <form onSubmit={handleSubmit(addTask)}>
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
                handleDeleteTask={handleDeleteTask}
                handleUpdateSubmit={handleUpdateSubmit}
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
