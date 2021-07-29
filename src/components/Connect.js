import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMe/AboutMe.css";

const Connect = () => {
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
        className="follow-me-icons text-kkred"
        href={option.url}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={[`${option.iconKey}`, `${option.iconName}`]} />
      </a>
    );
  });

  return <div className="follow-me-section inline-block">{listItems}</div>;
};

export default Connect;
