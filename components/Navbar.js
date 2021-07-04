import { useContext } from "react";
import { userContext } from "../pages/_app";
import { FiLogOut } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  const { user, setUser } = useContext(userContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ isLoggedIn: null });
  };

  return (
    <div className="flex justify-around items-center text-white bg-gray-700 p-4 h-20">
      <span>{user.name}</span>
      <Button
        render={() => (
          <button
            onClick={handleLogout}
            className="bg-red-600 rounded-md p-3 flex items-center gap-3 hover:font-bold hover:bg-red-700 duration-500"
          >
            Log out <FiLogOut />
          </button>
        )}
      />
    </div>
  );
};

export default Navbar;
