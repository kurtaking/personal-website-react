import logo from "./kkwhite-blue1.png";

const Sidebar = () => {
  return (
    <section
      className="h-screen w-60 text-center p-6"
      style={{ backgroundColor: "#286da8" }}
    >
      <img src={logo} alt="Kurt King Logo" />
      <h1>Kurt King</h1>
    </section>
  );
};

export default Sidebar;
