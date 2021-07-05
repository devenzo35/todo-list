import { useContext, useEffect, useState } from "react";
import { userContext } from "../pages/_app";

const WelcomeMsg = () => {
  const { user } = useContext(userContext);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const hiddeMessage = setTimeout(() => {
      setShowMessage(false);
      localStorage.setItem("visited", true);
    }, 3500);

    return () => clearTimeout(hiddeMessage);
  });

  const handleShowMessage = () => {
    setShowMessage(false);
  };

  const isVisited = localStorage.getItem("visited");

  return (
    <>
      {showMessage && !isVisited && (
        <div
          onClick={handleShowMessage}
          className="bg-white grid place-items-center border m-auto w-3/6 h-2/6 rounded-md text-3xl font-bold uppercase p-3 cursor-pointer text-gray-700 shadow-md duration-1000"
        >
          Bienvenido {user.name}!
        </div>
      )}
    </>
  );
};

export default WelcomeMsg;
