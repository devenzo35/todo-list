import { useState } from "react";
import { BsFillTrash2Fill } from "react-icons/bs";

const Task = ({ task }) => {
  const [done, setDone] = useState(false);

  const handleTaskDone = () => {
    setDone(!done);
  };
  return (
    <>
      <li
        onClick={handleTaskDone}
        className={`border w-full flex justify-between p-2 rounded-sm group  ${
          done && "line-through"
        }`}
      >
        {task}
        <BsFillTrash2Fill className="opacity-0 group-hover:opacity-100" />
      </li>
    </>
  );
};

export default Task;
