import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="flex p-8  px-20">{children}</main>
    </div>
  );
};

export default Layout;
