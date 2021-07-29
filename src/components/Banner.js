import logo from "../kkwhite-blue1.png";

const Banner = () => {
  return (
    <div className="container flex flex-wrap mx-auto h-80 bg-kkblue">
      <div className="w-full p-2 lg:w-1/3">
        <img src={logo} alt="Kurt Logo" />
      </div>
      <div className="flex w-full p-2 lg:w-1/3 items-center justify-center"></div>
    </div>
  );
};

export default Banner;
