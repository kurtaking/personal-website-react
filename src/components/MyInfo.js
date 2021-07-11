import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const MyInfo = () => {
  return (
    <div className="follow-me-section">
      <hr />
      <a
        className="follow-me-icons"
        href="https://www.kurtking.me"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faUserTie} />
      </a>
      <a
        className="follow-me-icons"
        href="https://www.linkedin.com/in/kurtaking/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="follow-me-icons"
        href="https://www.github.com/kurtaking"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default MyInfo;
