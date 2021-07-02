import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 min-h-screen p-8 px-20">{children}</main>
    </div>
  );
};

export default Layout;
