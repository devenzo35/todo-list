import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-gray-700 p-4 h-20">
      Username
      <Button
        render={() => (
          <button className="bg-red-700 rounded-md p-3">Log out</button>
        )}
      />
    </div>
  );
};

export default Navbar;
