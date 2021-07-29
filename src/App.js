import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/Header";
import Banner from "./components/Banner";

library.add(fab, fas);

function App() {
  return (
    <div>
      <Banner />
      <Header />
    </div>
  );
}

export default App;
