import logo from "./logo.svg";
import "./App.css";
import Adress from "./components/profile/Adresse";
import FullName from "./components/profile/FullName";
import Profile from "./components/profile/ProfilePhoto";
import ProfilePhoto from "./components/profile/ProfilePhoto";

const App = () => {
  const alerte = () => alert("good");
  return (
    <div>
      <FullName fullName=" laib khadidja" />
      <ProfilePhoto adam={alerte} />
      <Adress adress="alger" />
    </div>
  );
};

export default App;
