import { React, Component } from "react";
import Typed from "typed.js";

class TypedComponent extends Component {
  componentDidMount() {
    const { strings } = this.props;

    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <div className="typed-section">
          <span
            style={{
              whiteSpace: "pre",
            }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

export default TypedComponent;
