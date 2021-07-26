import "./App.css";
import Home from "./components/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <div>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
