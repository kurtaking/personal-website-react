import "./App.css";
import TypedComponent from "./components/TypedComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TypedComponent
            strings={[
              "Hello, my name is Kurt!^1000",
              "Website coming soon.",
              "Visit kurtking.me for now",
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
