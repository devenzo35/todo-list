import { useState } from "react";
import { BsFillTrash2Fill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { GoPencil } from "react-icons/go";
import { useForm } from "react-hook-form";

const Task = ({
  task,
  id,
  done,
  handleDoneTask,
  handleDeleteTask,
  handleUpdateSubmit,
}) => {
  const [modal, setModal] = useState(false);

  /* ---------------- */

  const { register, handleSubmit } = useForm();

  /* ---------------- */

  const handleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  return (
    <>
      <li
        onClick={() => handleDoneTask(id)}
        className={`border w-full flex justify-between items-center p-2 rounded-sm group cursor-pointer select-none ${
          done && "line-through"
        }`}
      >
        {task}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100">
          <GoPencil
            onClick={handleModal}
            title="Edit task"
            className="cursor-pointer hover:text-green-700 z-10"
          />
          <BsFillTrash2Fill
            onClick={(e) => handleDeleteTask(e, id)}
            title="Delete task"
            className="cursor-pointer hover:text-red-700"
          />
        </div>
      </li>
      {modal && (
        <div className="bg-white flex justify-center items-center border rounded-sm w-2/6 h-24 absolute shadow-md p-6 py-7">
          <form onSubmit={handleSubmit((data) => handleUpdateSubmit(data, id))}>
            <input
              className="border w-11/12 h-full p-2"
              type="text"
              name="updateTask"
              placeholder="Update task"
              {...register("task", {
                required: true,
              })}
            ></input>
          </form>
          <div
            onClick={handleModal}
            className="bg-red-400 text-white grid place-items-center border w-1/12 h-full p-2 cursor-pointer hover:bg-red-600"
          >
            <ImCancelCircle />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
