import "./App.css";
import TypedComponent from "./components/TypedComponent";
import MyInfo from "./components/MyInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypedComponent
          strings={[
            "Hello, my name is Kurt!",
            "Website coming soon.",
            "Visit kurtking.me for now",
          ]}
        />
        <div className="name-section">
          <MyInfo />
        </div>
      </header>
    </div>
  );
}

export default App;
