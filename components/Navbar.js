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
      <span className="font-bold text-2xl">{user.name}</span>
      <Button
        render={() => (
          <button
            onClick={handleLogout}
            className="bg-white bg-opacity-20 border-2 border-gray-500 rounded-md p-3 flex items-center gap-3 hover:font-bold hover:border-white duration-500"
          >
            Cerrar sesión <FiLogOut />
          </button>
        )}
      />
    </div>
  );
};

export default Navbar;
