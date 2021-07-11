import "./App.css";
import { useState, useEffect } from "react";
import MyInfo from "./components/MyInfo";
import TypedComponent from "./components/TypedComponent";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    requestInfo();
  }, []);

  async function requestInfo() {
    const url = process.env.REACT_APP_MY_INFO_URL;
    const res = await fetch(url);
    const json = await res.json();

    setName(json.firstName);
    setAge(json.age);
  }

  return (
    <div className="App">
      <header className="App-header">
        <TypedComponent
          strings={[
            `Hello, my name is ${name}!`,
            `Website coming soon.`,
            `Click below for ways to connect`,
          ]}
        />
        <div className="name-section">
          <MyInfo name={name} age={age} />
        </div>
      </header>
    </div>
  );
}

export default App;
