import logo from "./logo.svg";
import "./App.css";
import Adress from "./components/profile/Adresse";
import FullName from "./components/profile/FullName";
import Profile from "./components/profile/ProfilePhoto";

function App() {
  return (
    <div>
      <FullName />
      <Profile />
      <Adress />
    </div>
  );
}

export default App;
