import { useState, useEffect } from "react";
// import TypedComponent from "../Typed/TypedComponent";
import AboutMe from "../AboutMe/AboutMe";

function Home() {
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
    <div>
      <section>
        <AboutMe name={name} age={age} />
      </section>
    </div>
  );
}

export default Home;

/*
<section>
        <TypedComponent
          strings={[
            `Hello, my name is ${name}!`,
            `Website coming soon.`,
            `Click below for ways to connect`,
          ]}
        />
        */
