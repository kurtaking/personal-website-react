import logo from "../kkwhite-blue1.png";

const Banner = () => {
  return (
    <div className="flex justify-center mx-auto bg-kkblue">
      <div className="flex justify-center w-full md:w-2/3 lg:w-1/2">
        <img
          src={logo}
          alt="Kurt Logo"
          className="object-contain h-64 items-center"
        />
      </div>
    </div>
  );
};

export default Banner;
