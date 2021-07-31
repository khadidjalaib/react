import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>MY FIRST WEB APPLICATION</h1>

      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary">
        ENTRER
      </button>
    </div>
  );
}

export default App;
