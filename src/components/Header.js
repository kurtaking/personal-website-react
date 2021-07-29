import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import Connect from "./Connect";
import AboutMe from "./AboutMe/AboutMe";
import photo from "../mlh-kurt.jpg";
//import photo from "../kurt.jpeg";

const Header = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <div className="flex justify-between flex-row-reverse">
          <div className="w-64 h-64 relative">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center -mt-16">
              <img
                src={photo}
                alt="Kurt King"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
          <div className="ml-3 mt-3">
            <h1 className="font-bold text-lg lg:text-4xl">Kurt King</h1>
            <div className="flex items-center pl-2">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <p className="ml-2">Austin, TX</p>
            </div>
            <div className="flex items-center text-5xl pl-2">
              <Connect />
            </div>
          </div>
        </div>

        <div className="px-3">
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default Header;
