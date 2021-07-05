import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useCrud } from "../hooks/useCrud";
import Task from "./Task";
import Loader from "../components/Loader";

const Todo = () => {
  const { fetchData, postData } = useCrud("http://localhost:3001/tasks");
  const { register, handleSubmit, reset } = useForm();
  const [tasks, setTasks] = useState([]);

  const { loading, data, error } = fetchData();

  useEffect(() => {
    if (loading) {
      return;
    }
    setTasks(data);
  }, [data]);

  const addTask = (data) => {
    if (!data.task.length) return;
    const newTask = { ...data, id: uuidv4(), done: false };
    postData("post", newTask);
    setTasks((prev) => [...prev, newTask]);
    reset();
  };

  const handleDoneTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          postData("put", { ...t, done: !t.done }, "/" + id);
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      })
    );
  };

  const handleUpdateSubmit = (data, id, setModal) => {
    if (!data.task.length) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, task: data.task } : t))
    );
    setModal((prev) => !prev);
    postData("put", data, "/" + id);
  };

  const handleDeleteTask = (e, id) => {
    e.stopPropagation();
    postData("delete", {}, "/" + id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg w-3/6 h-min mx-auto p-3 mt-5">
      <form onSubmit={handleSubmit(addTask)}>
        <input
          className="border-b w-full p-1 mb-4"
          type="text"
          name="add task"
          placeholder="Add a task"
          {...register("task", {
            required: true,
          })}
          autoComplete="off"
        ></input>
      </form>
      {error && <p>{error}</p>}
      <ul className="flex flex-col justify-around gap-2 items-center h-full">
        {loading ? (
          <Loader />
        ) : tasks.length ? (
          tasks.map(({ id, task, done }) => {
            return (
              <Task
                key={id}
                task={task}
                id={id}
                done={done}
                handleDoneTask={handleDoneTask}
                handleUpdateSubmit={handleUpdateSubmit}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })
        ) : (
          <p>No hay tareas aún</p>
        )}
      </ul>
    </div>
  );
};

export default Todo;
