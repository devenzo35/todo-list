import { useContext, useState } from "react";
import { userContext } from "../pages/_app";

const WelcomeMsg = () => {
  const { user } = useContext(userContext);
  const [showMessage, setShowMessage] = useState(true);
  setTimeout(() => {
    setShowMessage(false);
  }, 3000);

  const handleShowMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      {showMessage && (
        <div
          onClick={handleShowMessage}
          className="bg-black bg-opacity-10 absolute grid place-items-center margin-auto inset-0"
        >
          <div className="bg-white border w-3/6 h-3/6 ">
            Welcome {user.email}
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeMsg;
