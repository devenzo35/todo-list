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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { task: `${task}` },
  });

  const handleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  return (
    <>
      <li
        onClick={() => handleDoneTask(id)}
        className={`border w-full flex justify-between items-center p-2 rounded-sm group cursor-pointer select-none duration-200 shadow-md hover:shadow-sm ${
          done && "line-through"
        }`}
      >
        {task}
        <div className="flex gap-2 opacity-0 duration-200 group-hover:opacity-100">
          <GoPencil
            onClick={handleModal}
            title="Edit task"
            className="cursor-pointer hover:text-green-700 z-10"
          />
          <BsFillTrash2Fill
            onClick={(e) => handleDeleteTask(e, id)}
            title="Delete task"
            className="cursor-pointer hover:text-red-600"
          />
        </div>
      </li>
      {modal && (
        <div className="bg-white flex flex-col gap-1 text-center border rounded-sm w-2/6 h-24 absolute shadow-md p-6 py-7 bottom-40">
          <form
            onSubmit={handleSubmit((data) =>
              handleUpdateSubmit(data, id, setModal)
            )}
          >
            <input
              className="border w-full h-full p-2"
              type="text"
              name="updateTask"
              placeholder="Update task"
              {...register("task", {
                required: true,
                maxLength: 40,
              })}
              autoComplete="off"
            ></input>
          </form>
          <div
            onClick={handleModal}
            className="bg-white absolute -top-2 -right-2 grid place-items-center border w-6 h-6 p-1 cursor-pointer rounded-full hover:bg-red-600"
          >
            <ImCancelCircle className="w-full h-full" />
          </div>
          {errors.task && (
            <span>Por favor ingrese entre 1 a 40 caracteres</span>
          )}
        </div>
      )}
    </>
  );
};

export default Task;
