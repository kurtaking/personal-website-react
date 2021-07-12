import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = (props) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: props.strings,
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup to prevent memory leaks
      typed.current.destroy();
    };
  }, [props.strings]);

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div>
    </div>
  );
};

export default TypedComponent;
