import { useContext } from "react";
import { userContext } from "../pages/_app";
import Button from "./Button";

const Navbar = () => {
  const { setUser } = useContext(userContext);

  /* function to log out user */
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ isLoggedIn: null });
  };

  return (
    <div className="flex justify-around items-center text-white bg-gray-700 p-4 h-20">
      Username
      <Button
        render={() => (
          <button onClick={handleLogout} className="bg-red-700 rounded-md p-3">
            Log out
          </button>
        )}
      />
    </div>
  );
};

export default Navbar;
