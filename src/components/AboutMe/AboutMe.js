//import { useState, useEffect } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMe.css";

const AboutMe = () => {
  /*const [options, setOptions] = useState([]);

  useEffect(() => {
    requestInfo();
  }, []);

  async function requestInfo() {
    const url = process.env.REACT_APP_FOLLOW_INFO_URL;
    const res = await fetch(url);
    const json = await res.json();

    setOptions(json.options);
  }

  const listItems = options.map((option) => {
    return (
      <a
        key={option.name}
        className="follow-me-icons"
        href={option.url}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={[`${option.iconKey}`, `${option.iconName}`]} />
      </a>
    );
  });*/

  return (
    <div>
      <div className="py-5 space-y-3">
        <p>Howdy!</p>
        <p>
          I&apos;m Kurt, a Texas native currently residing in Austin. I consider
          myself a designer at heart and love figuring out how things work. I
          established a passion for computers at a very young age and built my
          first web page using HTML/CSS around the age of twelve.
        </p>
      </div>
      <div className="m-5 mb-14 text-center">
        <p>
          My goal with this site is to constantly break it and repair it while
          trying new things. The updates you are seeing are currently being done
          with&nbsp;
          <a
            href="https://reactjs.org/docs/getting-started.html"
            className="text-kkred"
          >
            React
          </a>
          &nbsp;+&nbsp;
          <a href="https://tailwindcss.com" className="text-kkred">
            tailwindcss
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
