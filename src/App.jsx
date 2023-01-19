import "./App.css";
import PrincipalCard from "./Components/PrincipalCard";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Switch } from "@mantine/core";

function App() {
  // const darkMode = useDarkMode();

  return (
    <>
    <div>
      {/* <DarkModeSwitch> */}
        <h1>Welcome to my App</h1>
        {/* <Switch onClick={darkMode.toggle} /> */}
        <PrincipalCard />
      {/* </DarkModeSwitch> */}
      </div>
    </>
  );
}

export default App;
