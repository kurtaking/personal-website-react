import { useState, useEffect } from "react";

const MyInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    requestInfo();
  }, []);

  async function requestInfo() {
    const url = process.env.REACT_APP_MY_INFO_URL;
    console.log(url);
    const res = await fetch(url);
    const json = await res.json();

    setName(json.firstName);
    setAge(json.age);
  }

  return (
    <div>
      <p>My name is {name} </p>
      <p>I am {age} years old</p>
    </div>
  );
};

export default MyInfo;
