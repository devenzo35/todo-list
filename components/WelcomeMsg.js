import { useContext, useEffect, useState } from "react";
import { userContext } from "../pages/_app";

const WelcomeMsg = () => {
  const { user } = useContext(userContext);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const hiddeMessage = setTimeout(() => {
      setShowMessage(false);
      localStorage.setItem("visited", true);
    }, 3000);

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
          className="bg-black bg-opacity-20 absolute grid place-items-center margin-auto inset-0 duration-1000 motion-safe:animate-pulse delay-700"
        >
          <div className="bg-white grid place-items-center border w-3/6 h-2/6 rounded-xl text-3xl font-bold uppercase text-gray-700 shadow-md duration-1000">
            Welcome {user.name}!
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeMsg;
