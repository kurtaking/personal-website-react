import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMe.css";

const AboutMe = () => {
  const [options, setOptions] = useState([]);

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
  });

  return <div className="follow-me-section">{listItems}</div>;
};

export default AboutMe;
