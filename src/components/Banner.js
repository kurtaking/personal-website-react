import logo from "../kkwhite-blue1.png";

const Banner = () => {
  return (
    <div className="flex justify-center object-fill mx-auto bg-kkblue">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <img src={logo} alt="Kurt Logo" />
      </div>
    </div>
  );
};

export default Banner;
