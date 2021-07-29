import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Banner from "./components/Banner";
import Home from "./components/Home/Home";
//import AboutMe from "./components/AboutMe/AboutMe";
// import photo from "./mlh-kurt.jpg";

library.add(fab, fas);

function App() {
  return (
    <div className="container mx-auto px-80">
      <Banner />
      <Home />
    </div>
  );
}

export default App;
