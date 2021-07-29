import logo from "./kkwhite-blue1.png";

const Sidebar = () => {
  return (
    <nav
      className="h-screen w-72 text-center p-6 bg-kkblue"
      backgroundColor="kkblue"
    >
      <img src={logo} alt="Kurt King Logo" />
      <h1 className="hover:text-kkred">Kurt King</h1>
    </nav>
  );
};

export default Sidebar;
